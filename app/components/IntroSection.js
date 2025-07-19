import { useState, useEffect, useRef } from 'react';

export default function IntroSection() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef(null);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '2rem'
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      color: 'yellow',
      border: '1px solid rgba(77, 145, 247, 0.6)',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    },
    buttonActive: {
      backgroundColor: 'yellow',
      color: 'black'
    },
    buttonInactive: {
      backgroundColor: 'rgba(179, 246, 255, 0.34)'
    },
    expandableContainer: {
      maxHeight: activeSection ? '500px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out',
      marginTop: '1rem'
    },
    blogContainer: {
      padding: '20px',
      backgroundColor: 'rgba(77, 145, 247, 0.34)',
      borderRadius: '5px',
      color: 'white',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(77, 145, 247, 0.6) rgba(77, 145, 247, 0.34)'
    },
    blogContent: {
      display: 'inline-flex',
      gap: '20px',
      padding: '10px'
    },
    blogCard: {
      minWidth: '300px',
      padding: '20px',
      backgroundColor: 'rgba(77, 145, 247, 0.2)',
      borderRadius: '8px',
      whiteSpace: 'normal'
    },
    picturesContainer: {
      padding: '20px',
      backgroundColor: 'rgba(77, 145, 247, 0.34)',
      borderRadius: '5px',
      maxHeight: '500px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(77, 145, 247, 0.6) rgba(77, 145, 247, 0.34)'
    },
    picturesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '10px'
    },
    pictureCard: {
      aspectRatio: '1',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      backgroundColor: 'rgba(77, 145, 247, 0.2)'
    },
    picture: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    h3: {
      color: 'yellow'
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="intro" ref={sectionRef}>
      <br /><br />
      <h2 style={{ color: 'white' }}>Have a look around!</h2>
      <p style={{ color: 'white' }}>Scroll down to explore some of my projects</p>
      
      <div className="button-container" style={styles.container}>
        <button 
          onClick={() => toggleSection('blog')}
          style={{
            ...styles.button,
            ...(activeSection === 'blog' ? styles.buttonActive : styles.buttonInactive)
          }}
        >
          Blog
        </button>
        <button 
          onClick={() => toggleSection('pictures')}
          style={{
            ...styles.button,
            ...(activeSection === 'pictures' ? styles.buttonActive : styles.buttonInactive)
          }}
        >
          Pictures
        </button>
      </div>

      <div style={styles.expandableContainer}>
        {activeSection === 'blog' && (
          <div style={styles.blogContainer}>
            <div style={styles.blogContent}>
            <div style={styles.blogCard}>
                <h3 style={styles.h3}>Capstone Progress</h3>
                <h4>Sat 19th July 2025</h4>
                <p>
                  A few months later and the capstone project is speeding up!
                  For me core backend functionality is built, tested and working (for the most part), I'll continue to update it to fix things up and add things like authenication to it.
                  The calulation of statistics and github API itergration has a few routes, but more to come and and think about.
                </p>
              </div>
              <div style={styles.blogCard}>
                <h3 style={styles.h3}>AWS Cognito</h3>
                <h4>Wed 7th May 2025</h4>
                <p>
                  I've been working on a project that uses AWS Cognito to authenticate users for my Uni capstone project.
                  It's been an annoying pain to set up due to our clients custom requirements, and adds some custom steps that's a tad harder to learn, 
                  but it comes along fine eventually.
                </p>
              </div>
              <div style={styles.blogCard}>
                <h3 style={styles.h3}>314 Project hosting!</h3>
                <h4>Friday 2nd May 2025</h4>
                <p>
                  314 Project is now hosted!
                  Took some time to merge branches and test stuff, after setting up some new routing it works!
                  Check it out at <a href="https://www.ticketexpert.me" target="_blank" style={{color: 'yellow'}}>ticketexpert.me</a>
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'pictures' && (
          <div style={styles.picturesContainer}>
            <div style={styles.picturesGrid}>
              {['Endevor.jpeg', 'NZ.jpeg', 'BrisBusStation.jpeg', 'BrisSMU.JPG', 'BrisTrain2.jpeg'].map((image, index) => (
                <div key={index} style={styles.pictureCard}>
                  <img 
                    src={`/pics/${image}`}
                    alt="Pictures"
                    style={styles.picture}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}