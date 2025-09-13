const fs = require('fs');
const path = require('path');

function fixUnusedVariables(content, filePath) {
  // Fix unused error variables in catch blocks
  if (filePath.includes('admin-login/page.tsx')) {
    content = content.replace(
      /} catch (error) {([^}]*?)}/gs,
      `} catch (error: unknown) {
    console.error("Login error:", error);
    alert("Login failed. Please try again.");
  }`
    );
  }
  
  if (filePath.includes('count/route.ts')) {
    content = content.replace(
      /} catch (error) {/g,
      `} catch (err: unknown) {
    console.error("API error:", err);
    `
    );
  }
  
  return content;
}

function fixUnescapedEntities(content) {
  // Fix unescaped apostrophes in JSX content
  content = content.replace(/(\>[^<]*)'([^<]*\<)/g, (match, before, after) => {
    return before.replace(/'/g, '&apos;') + after;
  });
  
  // Fix unescaped quotes in JSX content
  content = content.replace(/(\>[^<]*) "([^<]*\<)/g, (match, before, after) => {
    return before.replace(/"/g, '&quot;') + after;
  });
  
  return content;
}

function fixUnusedExpressions(content, filePath) {
  // Remove common unused expressions
  content = content.replace(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*;\s*$/gm, '');
  content = content.replace(/^\s*\([^)]*\)\s*;\s*$/gm, '');
  
  return content;
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixUnusedVariables(content, filePath);
    content = fixUnescapedEntities(content);
    content = fixUnusedExpressions(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
          fixedCount += walkDirectory(itemPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(itemPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

console.log('🔧 Starting IAEC build error fixes...\n');

const fixedFiles = walkDirectory('./src');

console.log(`\n🎉 Completed! Fixed ${fixedFiles} files.`);
console.log("\n🚀 Run \"npm run build\" to verify the fixes.");
