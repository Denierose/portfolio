import React from 'react'

const Projects = () => {
  return (
    <div className='gallery'>
      <figure class="hover-img">
        <img src="/upang_updates.jpg" alt='project-1'/>
        <figcaption>
          <h3 className='fw-bold'>UPang Updates</h3>
          <h6>Mobile App that updates you about UPang</h6>
        </figcaption>
      </figure>
      <figure class="hover-img">
        <img src="/portal.jpg" alt='project-2'/>
        <figcaption>
          <h3 className='fw-bold'>PAID</h3>
          <h6>School Portal Web App for UPang students and faculty</h6>
        </figcaption>
      </figure>
      <figure class="hover-img">
        <img src="/cite.png" alt='project-3'/>
        <figcaption>
          <h3 className='fw-bold'>CITE Events</h3>
          <h6>Web Page about events happens in CITE</h6>
        </figcaption>
      </figure>
    </div>
  )
}

export default Projects
