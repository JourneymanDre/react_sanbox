import React from "react";

function Main() {
  const randomImage = "https://picsum.photos/200/?grayscale";
  let greeting;
  return (
    <div>
      <img src={randomImage} alt="random" />
      <p> Say {greeting} to the first person I see on any given morning.</p>
      <h1>Books I Am Currently Reading</h1>

      <ul>
        <li>The Design Of Everyday Things</li>
        <li>The Designers Dictionary Of Color</li>
        <li>Masters Of Logo</li>
      </ul>

      <img
        className="bird-img"
        src="https://insider.si.edu/wp-content/uploads/2017/04/SCTA-copy.jpg"
        alt="red bird"
      />
      <img
        className="bird-img"
        src="https://www.allaboutbirds.org/news/wp-content/uploads/2020/03/tricolored-heron-dorian-anderson-texas-124505431-1800-1280x853.jpg"
        alt="bird at sunset"
      />
      <img
        className="bird-img"
        src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ss-bird_honeycreeper.jpg?itok=VlVY6gUB"
        alt="blue bird on a limb"
      />
    </div>
  );
}

export default Main;
