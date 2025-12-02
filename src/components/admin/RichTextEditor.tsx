'use client';

import React, { useEffect, useRef } from 'react';
import type { CKEditor as CKEditorComponent } from '@ckeditor/ckeditor5-react';
import type ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import type { Editor as CKEditorInstance } from '@ckeditor/ckeditor5-core';
import type { EventInfo } from '@ckeditor/ckeditor5-utils';

interface EditorProps {
  onChange: (data: string) => void;
  value: string;
}

interface EditorModule {
  CKEditor: typeof CKEditorComponent;
  ClassicEditor: typeof ClassicEditorBuild;
}



function Editor({ onChange, value }: EditorProps) {
  const editorRef = useRef<EditorModule | null>(null);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    Promise.all([
      import('@ckeditor/ckeditor5-react'),
      import('@ckeditor/ckeditor5-build-classic')
    ]).then(([module, editorBuild]) => {
      editorRef.current = {
        CKEditor: module.CKEditor,
        ClassicEditor: editorBuild.default,
      };
    });
  }, []);

  let editorComponent;
  if (CKEditor && ClassicEditor) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    editorComponent = (
      <CKEditor
        editor={ClassicEditor as any}
        data={value}
        onChange={(_event: EventInfo, editor: CKEditorInstance) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
  } else {
    editorComponent = <div>Loading Editor...</div>;
  }

  return <div>{editorComponent}</div>;
}

export default Editor;
