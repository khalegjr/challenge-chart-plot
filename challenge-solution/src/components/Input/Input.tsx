import { json } from "@codemirror/lang-json";
import { tags as t } from "@lezer/highlight";
import { createTheme } from "@uiw/codemirror-themes";
import ReactCodeMirror from "@uiw/react-codemirror";

interface IProps {
  value?: string;
  onChange: (text: string) => void;
}

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#2e3440",
    foreground: "#ffffff",
    caret: "#AEAFAD",
    selection: "#6b6b6b",
    selectionMatch: "#D6D6D6",
    gutterBackground: "#60656e",
    gutterForeground: "#3e4343",
    gutterBorder: "#ddd",
    gutterActiveForeground: "",
    lineHighlight: "#000000",
  },
  styles: [
    { tag: t.comment, color: "#e048c7" },
    { tag: t.definition(t.typeName), color: "#194a7b" },
    { tag: t.typeName, color: "#194a7b" },
    { tag: t.string, color: "#0dc9d9" },
    { tag: t.number, color: "#9a71c2" },
    { tag: t.attributeValue, color: "#0dc9d9" },
  ],
});

const Input: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <ReactCodeMirror
      id="data-input"
      value={value}
      width="100vw"
      height="200px"
      theme={myTheme}
      extensions={[json()]}
      onChange={onChange}
      data-testid="data-input"
    />
  );
};

export default Input;
