import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

function Courses(props){
  return (
    <div className={styles.course1}>
  <li><h3>{props.name}</h3></li>;
  </div>
  );
}

function Courseone(){
  const courses = ["Cloud Computing","Cyber Security","Data Science","Software Development","DevOps","Machine Learning","Networking","Blockchain","Digital Marketing"];

  return (
    <div  className={styles.course}>
      <h1 >IT Courses List</h1>
  
      <ul > {courses.map((course)=><Courses name={course}/>)} </ul>
    </div>
  );
}

ReactDOM.render(<Courseone/>,document.getElementById('root'));