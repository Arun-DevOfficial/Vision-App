// Importing tools
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import Image from "@editorjs/image";
import Link from "@editorjs/link";
import Video from "editorjs-youtube-embed";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import Underline from "@editorjs/underline";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Header from "@editorjs/header";

// Function to upload image by URL
const uploadImageByUrl = (e) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(e); // This will resolve with the URL as provided
    } catch (error) {
      reject(error);
    }
  }).then((url) => {
    return {
      success: 1,
      file: { url },
    };
  });
};
console.log(uploadImageByUrl);

// Editor.js tools configuration
export const tools = {
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: Code,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImageByUrl,
      },
    },
  },
  link: Link,
  video: Video,
  table: Table,
  delimiter: Delimiter,
  underline: Underline,
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  inlineCode: InlineCode,
  marker: Marker,
  embed: Embed,
  header: {
    class: Header,
    config: {
      placeholder: "Type Heading....",
      levels: [2, 3],
      defaultLevel: 2,
    },
  },
};
