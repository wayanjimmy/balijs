import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../views/layout';
import Head from '../views/head';
import { CalendarIcon, LocationIcon } from '../views/icon';

const ActivityContainer = styled.article`
  text-align: center;
`;

const SectionContainer = styled.section`
  text-align: center;
  hr {
    width: 100px;
  }
`;

const Home = () => (
  <Layout>
    <Head title="Home" />
    <SectionContainer>
      <h2>What We Do</h2>
      <hr />
      <div className="columns">
        <div className="column">
          <ActivityContainer>
            <img src="http://via.placeholder.com/200x200" alt="Image 1" />
            <h3>Meeting</h3>
            <p>Dinner still nation challenge subject explain hope society.</p>
          </ActivityContainer>
        </div>
        <div className="column">
          <ActivityContainer>
            <img src="http://via.placeholder.com/200x200" alt="Image 1" />
            <h3>Learning</h3>
            <p>Dinner still nation challenge subject explain hope society.</p>
          </ActivityContainer>
        </div>
        <div className="column">
          <ActivityContainer>
            <img src="http://via.placeholder.com/200x200" alt="Image 1" />
            <h3>Creating</h3>
            <p>Dinner still nation challenge subject explain hope society.</p>
          </ActivityContainer>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer>
      <h2>Our Activities</h2>
      <hr />
      <article className="columns">
        <div className="column">
          <h3>The great war against Typescript uses Flowtype</h3>
          <div>
            <CalendarIcon /> <time dateTime="2011-11-18T14:54:39.929">10 Jul - 18.00 WITA</time>{' '}
            <LocationIcon /> Hub Bali, Seminyak
          </div>
          <p>Nam numquam eius repellendus alias voluptates.</p>
        </div>
        <div className="column">
          <img src="http://via.placeholder.com/300x300" alt="Event 1" />
        </div>
      </article>
    </SectionContainer>
  </Layout>
);

export default Home;
