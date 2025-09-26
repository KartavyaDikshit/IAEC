import os

files_to_fix = [
    "src/app/study-abroad/canada/page.tsx",
    "src/app/study-abroad/europe/italy/page.tsx",
    "src/app/study-abroad/europe/latvia/page.tsx",
    "src/app/study-abroad/europe/spain/page.tsx",
    "src/app/study-abroad/uk/page.tsx",
    "src/app/study-abroad/usa/page.tsx",
    "src/app/testimonials/page.tsx",
    "src/components/WhatsAppChat.tsx",
    "src/components/WhatsAppInstructions.tsx",
]

def fix_apostrophes(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    content = content.replace("'", "&apos;")

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

if __name__ == "__main__":
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_apostrophes(file_path)
            print(f"Fixed apostrophes in: {file_path}")
        else:
            print(f"File not found: {file_path}")
