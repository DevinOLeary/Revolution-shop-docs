import React from 'react';


const Sidebar = (props) => (
  <aside className="sidebar">
    <hgroup className="container column">
      <h2>Revolution Bike and Bean</h2>
      <h3>Shop Manual</h3>
    </hgroup>
    <section>
      <ul>
        {
          props.categories.map((title) => (
            <li key={title}>
            <h3>{title}</h3>
              <ul>
                {
                  props.info.filter((section) => {
                    return section.categoryTitle === title;
                  }).map((section) => (
                    <li key={section.sectionTitle}>{section.sectionTitle}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </section>
  </aside>
);


export default Sidebar;
