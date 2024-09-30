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
        line-height: 22pt;
        font-size: 11pt;
        letter-spacing: .8px;
        text-align: left;
        color: rgba(0, 0, 0, 0.75);
        word-wrap : break-word;
        padding-bottom: 120px;
    }

    .ql-editor::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }


`;
