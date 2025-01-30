import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { StackOperation } from '../../types';

interface StackVisualizerProps {
  onOperation: (operation: StackOperation) => void;
}

const StackVisualizer: React.FC<StackVisualizerProps> = ({ onOperation }) => {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [stackSize, setStackSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePush = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      if (stackSize !== null && stack.length >= stackSize) {
        setError('Stack Overflow');
      } else {
        setStack([...stack, value]);
        onOperation({
          type: 'push',
          value,
          timestamp: new Date(),
        });
        setInputValue('');
        setError(null);
      }
    }
  };

  const handlePop = () => {
    if (stack.length === 0) {
      setError('Stack Underflow');
    } else {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
      onOperation({
        type: 'pop',
        timestamp: new Date(),
      });
      setError(null);
    }
  };

  const handleStackSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    if (!isNaN(size) && size > 0) {
      setStackSize(size);
      setStack([]);
      setError(null);
    }
  };

  const stackPythonCode = `
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            return "Stack Underflow"

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            return "Stack is empty"

    def is_empty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)
`;

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Stack Visualization</h2>
      
      <div className="flex space-x-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a number"
        />
        
        <button
          onClick={handlePush}
          className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          <ArrowDown className="w-5 h-5" />
          <span>Push</span>
        </button>
        
        <button
          onClick={handlePop}
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          // disabled={stack.length === 0}
        >
          <ArrowUp className="w-5 h-5" />
          <span>Pop</span>
        </button>
      </div>

      <div className="flex space-x-4 mt-4">
        <input
          type="number"
          value={stackSize !== null ? stackSize : ''}
          onChange={handleStackSizeChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Set stack size"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="w-48 border-2 border-gray-300 rounded-lg p-4 mt-4">
        {stack.length === 0 ? (
          <p className="text-gray-500 text-center">Stack is empty</p>
        ) : (
          <div className="flex flex-col-reverse space-y-reverse space-y-2">
            {stack.map((value, index) => (
              <div
                key={index}
                className="p-2 bg-indigo-100 border border-indigo-200 rounded text-center"
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Python Stack Implementation</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code className="language-python">
            {stackPythonCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default StackVisualizer;