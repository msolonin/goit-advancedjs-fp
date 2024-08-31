import { renderExercises } from './exercises.js';
// import { LoadListenersForOpenModal } from './modal.js';

document.addEventListener('DOMContentLoaded', function () {
  const noFavoritesMessage = document.getElementById('no-favorites');
  const modal = document.getElementById('exercise-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDetails = document.getElementById('modal-details');
  const closeModalBtn = document.querySelector('.close-btn');
  const cardList = document.querySelector('.exercises-list');

  // const sampleFavoritesData = {
  //   page: 1,
  //   perPage: 10,
  //   totalPages: 17,
  //   results: [
  //    {"_id":"64f389465ae26083f39b17a3","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0002.gif","name":"45° side bend","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":4.19,"burnedCalories":323,"time":3,"popularity":1829},{"_id":"64f389465ae26083f39b17a4","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0003.gif","name":"air bike","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":4.42,"burnedCalories":312,"time":3,"popularity":3357},{"_id":"64f389465ae26083f39b17a5","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0006.gif","name":"alternate heel touchers","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.79,"burnedCalories":116,"time":3,"popularity":9167},{"_id":"64f389465ae26083f39b17ac","bodyPart":"waist","equipment":"medicine ball","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0014.gif","name":"assisted motion russian twist","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.57,"burnedCalories":212,"time":3,"popularity":652},{"_id":"64f389465ae26083f39b1935","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0464.gif","name":"front plank with twist","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":4.23,"burnedCalories":174,"time":3,"popularity":414},{"_id":"64f389465ae26083f39b1937","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0467.gif","name":"gorilla chin","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.8,"burnedCalories":105,"time":3,"popularity":282},{"_id":"64f389465ae26083f39b1947","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0495.gif","name":"incline twisting sit-up","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.17,"burnedCalories":229,"time":3,"popularity":374},{"_id":"64f389465ae26083f39b194f","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0508.gif","name":"janda sit-up","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.33,"burnedCalories":172,"time":3,"popularity":237},{"_id":"64f389465ae26083f39b17e3","bodyPart":"waist","equipment":"barbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0071.gif","name":"barbell press sit-up","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.4,"burnedCalories":156,"time":3,"popularity":307}
  //   ],
  // };
  // localStorage.setItem('favorites', JSON.stringify(sampleFavoritesData.results));
  // localStorage.removeItem('favorites');

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  function displayFavorites() {
    cardList.innerHTML = '';

    if (favorites.length === 0) {
      noFavoritesMessage.style.display = 'block';
    } else {
      noFavoritesMessage.style.display = 'none';
      cardList = renderExercises({ results: favorites }, true);
    }
  }

  function openModal(exercise) {
    modalTitle.textContent = exercise.name;
    modalDetails.textContent = `Detailed description and instructions for ${exercise.name}.`;
    modal.style.display = 'flex';
  }

  function removeExercise(id) {
    favorites = favorites.filter(exercise => exercise._id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  }

  // cardList.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('exercises__name-btn')) {
  //     const exercise = favorites.find(ex => ex._id == event.target.dataset.id);
  //     openModal(exercise);
  //   }
  // });

  // closeModalBtn.addEventListener('click', function () {
  //   modal.style.display = 'none';
  // });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  displayFavorites();
});
