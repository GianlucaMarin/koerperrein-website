#!/bin/bash

# KörperRein Website - Development Server Script
# This script starts a local development server

echo "🚀 Starting KörperRein Development Server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "📡 Starting server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "═══════════════════════════════════════"
    echo ""
    python3 -m http.server 8000
else
    echo "❌ Python 3 not found"
    echo ""
    echo "Please use one of these alternatives:"
    echo "1. Install Python 3: https://www.python.org/downloads/"
    echo "2. Use VS Code Live Server extension"
    echo "3. Use npx: npx serve"
    exit 1
fi
