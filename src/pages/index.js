import React from 'react'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function categoryFilter(info){
  const arr = [];
  info.forEach((node) => (
    arr.push(node.node.categoryTitle)
  ));
  const uniqueArr = Array.from(new Set(arr));
  return uniqueArr;
}

function sectionArray(info){
  const arr = [];
  info.forEach((node) => {
    arr.push(node.node);
  });
  return arr;
}

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeCategory: 'Opening'
    }
  }
  render(){
    const sectionEdges = this.props.data.allContentfulSection.edges;
    const sectionInfo = sectionArray(sectionEdges);
    const categories = categoryFilter(sectionEdges);
    const activeCategory = this.state.activeCategory;
    const activeInfo = sectionInfo.filter((node) => {
      return node.categoryTitle === activeCategory
    });
    return (
      <div>
        <Sidebar info={sectionInfo} categories={categories}/>
        <Main category={this.state.activeCategory} content={activeInfo}/>
      </div>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query docsQuery{
    markdownRemark {
      html
    }
    allContentfulSection {
    edges {
      node {
        categoryTitle
        sectionTitle
        sectionContent{
          sectionContent
        }
      }
    }
  }
  }
`
