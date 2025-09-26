
import os

def revert_apostrophes(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace("&apos;", "'")
    content = content.replace('&quot;', '"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    files_to_process = [
        'src/app/about/page.tsx',
        'src/app/study-abroad/australia/page.tsx',
        'src/app/study-abroad/canada/page.tsx',
        'src/app/study-abroad/europe/france/page.tsx',
        'src/app/study-abroad/europe/germany/page.tsx',
        'src/app/study-abroad/europe/italy/page.tsx',
        'src/app/study-abroad/europe/latvia/page.tsx',
        'src/app/study-abroad/europe/malta/page.tsx',
        'src/app/study-abroad/europe/spain/page.tsx',
        'src/app/study-abroad/ireland/page.tsx',
        'src/app/study-abroad/new-zealand/page.tsx',
        'src/app/study-abroad/uk/page.tsx',
        'src/app/study-abroad/usa/page.tsx',
        'src/app/terms-conditions/page.tsx',
        'src/app/testimonials/page.tsx',
        'src/components/WhatsAppChat.tsx',
        'src/components/WhatsAppInstructions.tsx'
    ]
    for file_path in files_to_process:
        if os.path.exists(file_path):
            revert_apostrophes(file_path)
            print(f'Reverted apostrophes in: {file_path}')
        else:
            print(f'File not found: {file_path}')
