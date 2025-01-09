// main.js
import { supabase } from './supabase.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
   e.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   try {
      // Sign in the user
      const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
         alert(`Login failed: ${error.message}`);
         return;
      }

      console.log('User logged in:', user); // Add this line for debugging

      // Fetch user role from the `users` table
      const { data: userData, error: fetchError } = await supabase
         .from('users')
         .select('role')
         .eq('email', email)
         .single();

      if (fetchError || !userData) {
         alert('Failed to retrieve user role. Please contact support.');
         return;
      }

      const userRole = userData.role;
      console.log('User role:', userRole); // Add this line for debugging


      // Redirect based on role
      if (userRole === 'admin') {
         window.location.href = 'admin/index.html';
      } else if (userRole === 'coordinator') {
         window.location.href = 'coordinator/index.html';
      } else if (userRole === 'student') {
         window.location.href = 'student/index.html';
      }else if (userRole === 'training_agency') {
         window.location.href = 'Training_Agency/index.html';
      } else {
         alert('Role not recognized. Please contact support.');
      }

   } catch (error) {
      console.error('Unexpected error logging in:', error);
      alert('An unexpected error occurred. Please try again.');
   }
});
// main.js
// import { supabase } from 'C:\Users\Maestrado\Downloads\iNetTutor.com-OJT-Records-Monitoring-System-Free-Template\OJT-Records-Monitoring-System\src\supabase.js';

// async function testSupabaseConnection() {
//    try {
//       // Attempt to fetch data from a table, e.g., the `users` table
//       const { data, error } = await supabase.from('users').select('*');

//       if (error) {
//          console.error('Supabase connection failed:', error.message);
//          alert('Supabase connection failed. Check console for details.');
//       } else {
//          console.log('Supabase connection successful! Retrieved data:', data);
//          alert('Supabase connection successful!');
//       }
//    } catch (error) {
//       console.error('Unexpected error:', error);
//       alert('An unexpected error occurred. Check console for details.');
//    }
// }

// // Call the test function on page load
// window.addEventListener('load', () => {
//    testSupabaseConnection();
// });
