'use client';

import React, { useEffect, useRef } from 'react';
import type { CKEditor as CKEditorComponent } from '@ckeditor/ckeditor5-react';
import type ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

interface EditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  value: string;
}

interface EditorModule {
  CKEditor: typeof CKEditorComponent;
  ClassicEditor: typeof ClassicEditorBuild;
}

function Editor({ onChange, editorLoaded, value }: EditorProps) {
  const editorRef = useRef<EditorModule | null>(null);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    if (editorLoaded) {
      Promise.all([
        import('@ckeditor/ckeditor5-react'),
        import('@ckeditor/ckeditor5-build-classic')
      ]).then(([module, editorBuild]) => {
        editorRef.current = {
          CKEditor: module.CKEditor,
          ClassicEditor: editorBuild.default,
        };
      });
    }
  }, [editorLoaded]);

  return (
    <div>
      {editorLoaded && CKEditor && ClassicEditor ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(_event: React.SyntheticEvent, editor: ClassicEditorBuild) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Loading Editor...</div>
      )}
    </div>
  );
}

export default Editor;
