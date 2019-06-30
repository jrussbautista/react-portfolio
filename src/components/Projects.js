import React, { Component } from 'react';


const Projects = (props) => {
	
	const data = props.portfolioData;
	let projectList;
	projectList = data.projects.map((proj, key) => {
		return (
          <div className="col-4" key={key}>
            <div className="site-project">
              <div className="site-project__cover">
                <div className="site-project__img" style={{ backgroundImage: `url("${proj.imageUrl}")` }}></div>
                <div className="site-project__overlay">
                  <div className="site-project__info">
                    <h1 className="site-project__title"> { proj.title }  </h1>
                    <button className="btn btn-outline-white btn-radius btn-md" type="button"> Visit Website</button>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
			)
	})	

	return (
    <section className="site-section site-standard" id="project">
      <div className="container">
          <div className="site-section__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
              <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }}></polyline>
            </svg>
          </div>        
        <h1 className="site-heading"> My Recent Projects </h1>
        <div className="row">
			{ projectList }          
        </div>        
      </div>
    </section>
		)
}

export default Projects;