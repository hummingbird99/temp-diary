import "./App.css";
import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";

const dummyList = [
  {
    id: Date.now(),
    author: "김벌새",
    content: "첫 번째 게시글",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이벌새",
    content: "두 번째 게시글",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "최벌새",
    content: "세 번째 게시글",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
