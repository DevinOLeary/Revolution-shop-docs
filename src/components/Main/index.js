import React from 'react';

const Main = (props) => (
  <main className="container-content container column">
    <h1>{props.category}</h1>
    {
      props.content.map((section) => (
        <article key={section.sectionTitle}>
          <h3>{section.sectionTitle}</h3>
          <span>{section.sectionContent.sectionContent}</span>
        </article>
      ))
    }
  </main>
)

export default Main;
