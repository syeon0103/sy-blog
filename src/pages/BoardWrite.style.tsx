import { css } from '@emotion/react';

export const editorCss = css`
    width: 1000px;
    height: 1000px;

    .ql-toolbar {
        border: none !important;
    }
    
    .ql-container {
        border: none !important;
    }
    .ql-editor {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    
    .ql-editor::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    .ql-letter-spacing-1 {
        letter-spacing: 10px;
    }

    .ql-letter-spacing-2 {
        letter-spacing: 1px;
    }

    .ql-letter-spacing-3 {
        letter-spacing: 2px;
    }

    .ql-letter-spacing-4 {
        letter-spacing: 3px;
    }

`;
