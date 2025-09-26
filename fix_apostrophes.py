import os

# List of files to process
files_to_process = [
    'src/app/study-abroad/canada/page.tsx',
    'src/app/study-abroad/europe/france/page.tsx',
    'src/app/study-abroad/europe/italy/page.tsx',
    'src/app/study-abroad/europe/latvia/page.tsx',
    'src/app/study-abroad/europe/spain/page.tsx',
    'src/app/study-abroad/uk/page.tsx',
    'src/app/study-abroad/usa/page.tsx',
    'src/app/testimonials/page.tsx',
    'src/components/WhatsAppChat.tsx',
    'src/components/WhatsAppInstructions.tsx'
]

def fix_apostrophes(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace unescaped apostrophes and quotes
    content = content.replace("'", "&apos;")
    content = content.replace('" ', '&quot;')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    for file_path in files_to_process:
        if os.path.exists(file_path):
            fix_apostrophes(file_path)
            print(f'Fixed apostrophes in: {file_path}')
        else:
            print(f'File not found: {file_path}')