import mongoose from 'mongoose';
import connectDB from '../server/config/db.js';

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

describe('connectDB()', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.clearAllMocks();
  });

  it('should connect to MongoDB when URI is provided', async () => {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/testdb';
    mongoose.connect.mockResolvedValue({ connection: { host: 'localhost' } });

    console.log = jest.fn(); // Mock console.log to prevent actual output

    await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    expect(console.log).toHaveBeenCalledWith('✅ MongoDB Connected: localhost');
  });

  it('should throw an error if MONGODB_URI is not defined', async () => {
    delete process.env.MONGODB_URI;

    await expect(connectDB()).rejects.toThrow('MONGODB_URI is not defined in environment variables');
  });

  it('should log and exit process on connection error', async () => {
    process.env.MONGODB_URI = 'mongodb://invalid';
    const error = new Error('Connection failed');
    mongoose.connect.mockRejectedValue(error);

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    console.error = jest.fn();

    await connectDB();

    expect(console.error).toHaveBeenCalledWith('❌ MongoDB Connection Error: Connection failed');
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
