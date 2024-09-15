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

// to setup upload image by URL
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

// to setup upload image by file
const uploadImageByFile = (e) => {
  let link = new Promise((resolve, reject) => {
    try {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          success: 1,
          file: { url: reader.result },
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
  console.log(link);
  return link;
};

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
        uploadByFile: uploadImageByFile,
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
