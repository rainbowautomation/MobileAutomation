import fs from 'fs';
import path from 'path';

export function loadTestData(fileName = 'testData.json') {
  const filePath = path.resolve(process.cwd(), 'test', 'data', fileName);

  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
  } catch (err) {
    throw new Error(`Failed to load test data file: ${filePath} - ${err.message}`);
  }
}
