import React from "react";

export default function ChatBox() {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col h-full">
      {/* Header */}
      <h2 className="bg-orange-500 text-white px-4 py-2 rounded-t-lg font-semibold">
        Chat With Cypher
      </h2>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto text-gray-700 space-y-2">
        <p>Hello! How can I help you today?</p>
        <p>Please describe the disaster situation...</p>
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t">
        <input
          type="text"
          placeholder="Enter your question..."
          className="flex-1 border rounded px-2 py-1"
        />
        <button className="bg-orange-500 text-white px-4 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
