import contributors from './contributors/main.json'
import './styles/style.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

let avatar;
const Card = (props) => {

  const [avatarUrl, setAvatarUrl] = useState(null);

   const headers = {
        Authorization: process.env.REACT_APP_GIT_KEY
    }
  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.githubUsername}`,headers)
      .then((response) => {
        if (response.data.avatar_url) {
          setAvatarUrl(response.data.avatar_url);
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub data: ", error);
      });
  }, []);

  return (

      <div class="box1 box">
        <div class="content">
          <div class="image">
            <img src={avatarUrl} alt="Profile Image" />
          </div>

          <div class="text">
            <p class="name">{props.githubUsername}</p>
            <p class="job_title">{props.role}</p>
            <p class="job_discription">{props.school}.</p>
          </div>
          <div class="icons">
            <a href={props.insta} target='_blank'><button>
              <ion-icon name="logo-instagram"></ion-icon>
            </button></a>
            <a href={props.twitter} target='_blank'> <button>
              <ion-icon name="logo-twitter"></ion-icon>
            </button></a>
            <a href={props.linkedin} target='_blank'> <button>
              <ion-icon name="logo-linkedin"></ion-icon>
            </button></a>
            <a href={props.github} target='_blank'> <button>
              <ion-icon name="logo-github"></ion-icon>
            </button></a>
          </div>
        </div>
      </div>


  )
}

function App() {
  return (
    <>
    <br />
    <div class="four">
  <h1><span>ACM's</span><br />Hacking <em>Wizards</em></h1>
</div><br />
      <div className="main">
        {
          contributors.map((i) => (
            <Card githubUsername={i.githubUsername} role={i.role} school={i.school} twitter={i.twitter} insta={i.insta} github={i.github} linkedin={i.linkedin} />
          ))
        }
      </div>
    </>
  );
}

export default App;
