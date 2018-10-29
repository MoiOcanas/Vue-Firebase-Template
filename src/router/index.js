import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';
import Dash from '@/components/insideComponents/Dash';
import Results from '@/components/insideComponents/Results';
import Request from '@/components/insideComponents/Request';
import Profile from '@/components/insideComponents/Profile';
import Edit from '@/components/insideComponents/Edit';
import admRequests from '@/components/insideAdmin/admRequests';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/maindashboard',
      name: 'Dash',
      component: Dash
    },
    {
      path: '/request',
      name: 'Request',
      component: Request
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/admrequests',
      name: 'admRequests',
      component: admRequests
    }
  ]
});
