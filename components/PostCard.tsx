import Image from 'next/image';
import styles from './PostCard.module.css';

const PostCard = () => (
  <article className={styles.container}>
    <div className={styles.header}>
      <Image
        className={styles.avatar}
        src="https://thispersondoesnotexist.com/image"
        width={50}
        height={50}
        alt="Tom Hanks"
      />
      <div className={styles.postInfo}>
        <span className={styles.author}>Tom Hanks</span>
        <span className={styles.postTime}>3 hours ago</span>
      </div>
    </div>
    <h2 className={styles.title}>Healthy vegeterian bowl</h2>
    <span className={styles.prepTime}>20 minutes</span>
    <div className={styles.image}>
      <img src="https://www.greenqueen.com.hk/wp-content/uploads/2016/01/oh-she-glows-veggie-bowl.jpg" />
    </div>
    <div className={styles.buttons}>
      <button>223 likes</button>
      <button>Comments</button>
      <button>Share</button>
    </div>
    <div className={styles.tags}></div>
  </article>
);

export default PostCard;
