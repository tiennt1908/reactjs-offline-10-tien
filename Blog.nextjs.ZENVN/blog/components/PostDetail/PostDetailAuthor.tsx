import ImageCustom from "../shared/ImageCustom";
import styles from "./post-author.module.scss";

type Props = {
  avatar: string;
  nickname: string;
  description: string;
};
function PostDetailAuthor({ avatar, nickname, description }: Props) {
  return (
    <div className={styles["post-author"]}>
      <div className={styles["post-author__bg-avatar"]}>
        <a href="/" className={styles["post-author__avatar"]}>
          <ImageCustom src={avatar} alt={description} width={50} height={50}></ImageCustom>
        </a>
      </div>
      <div className={styles["post-author__nickname"]}>
        <a href="/">{nickname}</a>
      </div>
      <p className={styles["post-author__desc"]}>{description}</p>
    </div>
  );
}

export default PostDetailAuthor;
