import React from 'react'

const Projects = () => {
  return (
    <div className='gallery'>
      <figure class="hover-img">
        <a href='https://github.com/Denierose' className='text-light'>
        <img src="/upang_updates.jpg" alt='project-1'/>
        <figcaption>
          <h3 className='fw-bold'>UPang Updates</h3>
          <h6>Mobile App that updates you about UPang</h6>
        </figcaption>
        </a>
      </figure>
      <figure class="hover-img">
        <a href='https://github.com/Denierose' className='text-light'>
          <img src="/portal.jpg" alt='project-2'/>
          <figcaption>
            <h3 className='fw-bold'>PAID</h3>
            <h6>School Portal Web App for UPang students and faculty</h6>
          </figcaption>
        </a>
      </figure>
      <figure class="hover-img">
        <a href='https://github.com/Denierose' className='text-light'>
          <img src="/cite.png" alt='project-3'/>
          <figcaption>
            <h3 className='fw-bold'>CITE Events</h3>
            <h6>Web Page about events happens in CITE</h6>
          </figcaption>
        </a>
      </figure>
    </div>
  )
}

export default Projects
