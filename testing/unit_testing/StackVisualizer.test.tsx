import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StackVisualizer from '../../src/components/learning/StackVisualizer';
import React from 'react';

describe('StackVisualizer', () => {
  const mockOnOperation = jest.fn();

  beforeEach(() => {
    mockOnOperation.mockClear();
  });

  test('renders the component correctly', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    expect(screen.getByText('Stack Visualization')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter a number')).toBeInTheDocument();
    expect(screen.getByText('Push')).toBeInTheDocument();
    expect(screen.getByText('Pop')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Set stack size')).toBeInTheDocument();
  });

  test('handles push operation correctly', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    const input = screen.getByPlaceholderText('Enter a number');
    const pushButton = screen.getByText('Push');

    // Enter a value and click push
    fireEvent.change(input, { target: { value: '42' } });
    fireEvent.click(pushButton);

    // Check if the value is added to the stack
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(mockOnOperation).toHaveBeenCalledWith({
      type: 'push',
      value: 42,
      timestamp: expect.any(Date),
    });
  });

  test('handles pop operation correctly', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    const input = screen.getByPlaceholderText('Enter a number');
    const pushButton = screen.getByText('Push');
    const popButton = screen.getByText('Pop');

    // Push a value
    fireEvent.change(input, { target: { value: '42' } });
    fireEvent.click(pushButton);

    // Pop the value
    fireEvent.click(popButton);

    // Check if the value is removed from the stack
    expect(screen.queryByText('42')).not.toBeInTheDocument();
    expect(mockOnOperation).toHaveBeenCalledWith({
      type: 'pop',
      timestamp: expect.any(Date),
    });
  });

  test('displays stack overflow error', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    const input = screen.getByPlaceholderText('Enter a number');
    const pushButton = screen.getByText('Push');
    const stackSizeInput = screen.getByPlaceholderText('Set stack size');

    // Set stack size to 1
    fireEvent.change(stackSizeInput, { target: { value: '1' } });

    // Push two values
    fireEvent.change(input, { target: { value: '42' } });
    fireEvent.click(pushButton);
    fireEvent.change(input, { target: { value: '99' } });
    fireEvent.click(pushButton);

    // Check for stack overflow error
    expect(screen.getByText('Stack Overflow')).toBeInTheDocument();
  });

  test('displays stack underflow error', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    const popButton = screen.getByText('Pop');

    // Pop from an empty stack
    fireEvent.click(popButton);

    // Check for stack underflow error
    expect(screen.getByText('Stack Underflow')).toBeInTheDocument();
  });

  test('updates stack size correctly', () => {
    render(<StackVisualizer onOperation={mockOnOperation} />);
    const stackSizeInput = screen.getByPlaceholderText('Set stack size');

    // Set stack size to 5
    fireEvent.change(stackSizeInput, { target: { value: '5' } });

    // Check if the stack size is updated
    expect(stackSizeInput).toHaveValue(5);
  });

});