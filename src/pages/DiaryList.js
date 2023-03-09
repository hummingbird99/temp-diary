import DiaryItem from "../components/DiaryItem";
import styles from "./DiaryList.module.css";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className={styles.list}>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((item) => (
          <DiaryItem
            key={item.id}
            {...item}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
