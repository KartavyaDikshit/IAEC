import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studyAbroadDir = path.join(__dirname, 'src', 'app', 'study-abroad');

function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const pageFiles = findPageFiles(studyAbroadDir);

for (const filePath of pageFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find FAQ section
  let match = content.match(/{\/\* FAQ Section \*\/\}([\s\S]*?){\/\* CTA Section \*\/\}/i);
  if (!match) {
      match = content.match(/Frequently Asked Questions[\s\S]*?(?={\/\* CTA Section \*\/\})/i);
  }
  
  if (match) {
    const faqContent = match[0];
    const faqs = [];
    
    // Extract questions (h3) and answers (p)
    const qRegex = /<h3[^>]*>(.*?)<\/h3>/g;
    const aRegex = /<p[^>]*>(.*?)<\/p>/g;
    
    let qMatch;
    let aMatch;
    
    // Simplistic extraction based on assumption they are in pairs
    const questions = [];
    const answers = [];
    while ((qMatch = qRegex.exec(faqContent)) !== null) {
      questions.push(qMatch[1].trim());
    }
    while ((aMatch = aRegex.exec(faqContent)) !== null) {
      // Filter out 'Frequently Asked Questions' subtitle if it was caught as p
      if (!aMatch[1].includes('Common queries')) {
        answers.push(aMatch[1].trim());
      }
    }
    
    for (let i = 0; i < Math.min(questions.length, answers.length); i++) {
      faqs.push({
        "@type": "Question",
        "name": questions[i],
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answers[i]
        }
      });
    }
    
    if (faqs.length > 0 && !content.includes('FAQPage')) {
      const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs
      };
      
      // Extract country name from path
      const pathParts = filePath.split(path.sep);
      const countrySlug = pathParts[pathParts.length - 2];
      const countryName = countrySlug.charAt(0).toUpperCase() + countrySlug.slice(1).replace('-', ' ');
      
      const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.iaecconsultants.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Study Abroad",
            "item": "https://www.iaecconsultants.in/study-abroad"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": countryName,
            "item": "https://www.iaecconsultants.in/study-abroad/" + countrySlug
          }
        ]
      };
      
      const scriptTag = "\n<script\n" +
        "  type=\"application/ld+json\"\n" +
        "  dangerouslySetInnerHTML={{ __html: JSON.stringify([" + JSON.stringify(faqJsonLd) + ", " + JSON.stringify(breadcrumbJsonLd) + "]) }}\n" +
        "/>\n";
      
      // Inject before the final closing div of the FAQ section or similar
      // Easiest is to inject it right after {/* FAQ Section */}
      content = content.replace(/{\/\* FAQ Section \*\/\}/, "{/* FAQ Section */}" + scriptTag);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log("Added FAQ & Breadcrumb Schema to " + filePath);
    }
  }
}
