import styles from "../styles/QuizInfo.module.css";
import MyLink from "../components/MyLink";
import { useEffect, useState } from "react";
import type { ResponseDataType } from "../index.d.ts";

function QuizInfo() {
  const [quizInfo, setQuizInfo] = useState<ResponseDataType[]>([]);

  useEffect(() => {
    const fetchQuizInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/allquiz/all-quiz");
        const data = await response.json();
        console.log(data);
        setQuizInfo(data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        // Handle error, e.g., set an error state or redirect to an error page
      }
    };

    fetchQuizInfo();
  }, []);

  // if (!quizInfo.length) {
  //   // Redirect or handle the case where quizInfo is empty
  //   window.location.href = "/";
  // }

  return (
    <div className={styles.container}>
      {!!quizInfo && (
        <>
          <h2 className={styles.info_title}>Created quizzes</h2>
          <div className={styles.boxes}>
            {quizInfo.map((object, index) => (
              <div className={styles.text_parent} key={index}>
                <div className={styles.text}>
                  <p>ID:</p>
                  <span>{object.id}</span>
                </div>
                <div className={styles.text}>
                  <p>Password:</p>
                  <span>{object.password}</span>
                </div>
                <div className={styles.text}>
                  <p>Created:</p>
                  <span>{object.created}</span>
                </div>
              </div>
            ))}
          </div>
          <MyLink path="/" name="Back to home" />
        </>
      )}
    </div>
  );
}

export default QuizInfo;
