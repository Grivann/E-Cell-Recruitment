    const headerItems = document.querySelectorAll("#header .heading");
    const logo = document.getElementById("logo");
 
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });
    }
    headerItems.forEach(item => {
        item.addEventListener("click", function() {
            let target;
            if (item.innerText === "HOME") {
                target = "html"; 
            } else if (item.innerText === "VISION") {
                target = "#vision";
            } else if (item.innerText === "TEAM") {
                target = "#Team";
            } else {
                target = "#" + item.innerText.toLowerCase();
            }
            smoothScroll(target);
        });
    });
    logo.addEventListener("click", function() {
        smoothScroll("html");
    });;

    fetch('https://api.ecelliitr.org/edc/team')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let count = 1; 
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < data[i].members.length; j++) {
        //   console.log(data[i].members[j].name);
        //   console.log(data[i].members[j].image);
        //   console.log(data[i].members[j].position);
        //   console.log("");
          
          let teamData = document.querySelector(`#team${count}`);
          console.dir(teamData.children[0])
          teamData.children[0].src=data[i].members[j].image;
          teamData.children[1].innerText=data[i].members[j].name;
          teamData.children[2].innerText=data[i].members[j].position;
          console.log(teamData.children[2].innerText.length)
          if(teamData.children[2].innerText.length>20){
            teamData.children[2].style.fontSize="2.5vh";
          }
          count++;
        }
      }
      
      }
    )
    .catch(error => {
      console.error('Error fetching data:', error);
    });

// async function populateHTML() {
//     const data = await fetchData();
//     const container = document.querySelector(".profilecont");
//     if (data && data.length > 0) {
//         container.innerHTML = '';
//         data.forEach(item => {
//             const element = document.createElement('div');
//             element.classList.add('teamC'); // Add class 'teamC' to the div
//             element.innerHTML = `
//                 <img src="${item.image}" alt="">
//                 <p>${item.name}</p>
//                 <p>${item.member_type}</p>
//             `;
//             container.appendChild(element);
//         });
//     } else {
//         container.innerHTML = '<p>No data available.</p>';
//     }
// }



// [
//     {
//       "position": "Secretary",
//       "members": [
//         {
//           "id": 11,
//           "name": "Chirayu Mor",
//           "position": "Secretary",
//           "email": "chirayu_m@ece.iitr.ac.in",
//           "mobile": "9672035015",
//           "image": "http://api.ecelliitr.org/media_files/team/Chirayu-modified.jpg",
//           "quote": "Honesty and Frankness make you vulnerable, be honest and frank anyways",
//           "fblink": "https://www.facebook.com/chirayu.mor",
//           "linkedin": "https://www.linkedin.com/in/chirayu-mor/",
//           "member_type": "Secretary"
//         }
//       ]
//     },
//     {
//       "position": "Additional Secretary",
//       "members": [
//         {
//           "id": 13,
//           "name": "Pratyush Mangal",
//           "position": "Additional Secretary",
//           "email": "pratyush_m@bt.iitr.ac.in",
//           "mobile": "+91 9799042645",
//           "image": "http://api.ecelliitr.org/media_files/team/IMG-20230312-WA0022-modified_-_PRATYUSH_MANGAL.jpg",
//           "quote": "Life is what happens to us while we are making other plans.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/pratyushmangal",
//           "member_type": "Additional Secretary"
//         }
//       ]
//     },
//     {
//       "position": "Heads",
//       "members": [
//         {
//           "id": 14,
//           "name": "Ishika",
//           "position": "Head of Technical Operations",
//           "email": "ishika@ch.iitr.ac.in",
//           "mobile": "9548458597",
//           "image": "http://api.ecelliitr.org/media_files/team/WhatsApp_Image_2023-06-29_at_20.44.13.jpg",
//           "quote": "A well-spent day brings happy sleep.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/ishika-179923240/",
//           "member_type": "Heads"
//         },
//         {
//           "id": 15,
//           "name": "Divyanshu Dev",
//           "position": "Head of Technical Operations",
//           "email": "d_dev@me.iitr.ac.in",
//           "mobile": "7070636679",
//           "image": "http://api.ecelliitr.org/media_files/team/WhatsApp_Image_2023-06-29_at_20.49.18.jpg",
//           "quote": "Keep calm and carry on.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/divyanshu-dev-015996223/?originalSubdomain=in",
//           "member_type": "Heads"
//         },
//         {
//           "id": 16,
//           "name": "Priyanshu Gupta",
//           "position": "Head of Design",
//           "email": "p_gupta@ce.iitr.ac.in",
//           "mobile": "7727042145",
//           "image": "http://api.ecelliitr.org/media_files/team/mine_-_PRIYANSHU_GUPTA.png",
//           "quote": "The time is always right to do what is right.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/priyanshu-gupta-ba6154201/",
//           "member_type": "Heads"
//         },
//         {
//           "id": 17,
//           "name": "Rishika",
//           "position": "Head of Weekly Discussions and Newsletter",
//           "email": "rishika@cs.iitr.ac.in",
//           "mobile": "9350150257",
//           "image": "http://api.ecelliitr.org/media_files/team/1B5554E1-13E9-4381-8A44-F26AFDDEE101_-_RISHIKA_RISHIKA.jpeg",
//           "quote": "Doing the best at this moment puts you in the best place for the next moment.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/rishika-pilania-8714a122a",
//           "member_type": "Heads"
//         },
//         {
//           "id": 18,
//           "name": "Shubhanshu Shukla",
//           "position": "Head of E-Club",
//           "email": "s_shukla@hs.iitr.ac.in",
//           "mobile": "8770456437",
//           "image": "http://api.ecelliitr.org/media_files/team/Picsart_23-06-19_22-39-17-374_-_SHUBHANSHU_SHUKLA.jpg",
//           "quote": "Out of difficulties grow miracles.",
//           "fblink": "https://www.facebook.com/mukul.shukla.391",
//           "linkedin": "https://www.linkedin.com/in/shubhanshu-shukla-195068203",
//           "member_type": "Heads"
//         },
//         {
//           "id": 19,
//           "name": "Dhruv Malviya",
//           "position": "Head of E-club",
//           "email": "d_malviya@mt.iitr.ac.in",
//           "mobile": "6377901081",
//           "image": "http://api.ecelliitr.org/media_files/team/IMG-20230910-WA0056.jpg",
//           "quote": "If you don’t risk anything, you risk even more.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/dhruv-malviya-85b5b722a",
//           "member_type": "Heads"
//         },
//         {
//           "id": 20,
//           "name": "Naveen Kachhawa",
//           "position": "Head of Public Relations and marketing",
//           "email": "n_kachhawa@ch.iitr.ac.in",
//           "mobile": "8955150046",
//           "image": "http://api.ecelliitr.org/media_files/team/IMG_20230630_020224_-_NAVEEN_KACHHAWA.jpg",
//           "quote": "If you want it, work for it.",
//           "fblink": "https://www.facebook.com/profile.php?id=100092544229675",
//           "linkedin": "https://www.linkedin.com/in/naveen-kachhawa-53a6b8215/",
//           "member_type": "Heads"
//         },
//         {
//           "id": 22,
//           "name": "Aditya Jaiswal",
//           "position": "Head of Zero to One",
//           "email": "a_jaiswal@ece.iitr.ac.in",
//           "mobile": "8690806609",
//           "image": "http://api.ecelliitr.org/media_files/team/me_again_-_ADITYA_JAISWAL.jpg",
//           "quote": "The healthiest response to life is joy.",
//           "fblink": "https://www.facebook.com/schcham.jaiswal",
//           "linkedin": "https://www.linkedin.com/in/aditya-jaiswal-358476240/",
//           "member_type": "Heads"
//         },
//         {
//           "id": 23,
//           "name": "Yashasvi Choudhary",
//           "position": "Head of Zero to One",
//           "email": "y_choudhary@ce.iitr.ac.in",
//           "mobile": "9685832021",
//           "image": "http://api.ecelliitr.org/media_files/team/IMG_6840_-_YASHASVI_CHOUDHARY.jpeg",
//           "quote": "Look for opportunities in every change in your life.",
//           "fblink": "null",
//           "linkedin": "https://www.linkedin.com/in/yashasvi-choudhary-633a8a22a/",
//           "member_type": "Heads"
//         },
//         {
//           "id": 24,
//           "name": "Vandit Khanna",
//           "position": "Head of PR and Marketing",
//           "email": "v_khanna@ee.iitr.ac.in",
//           "mobile": "7986528816",
//           "image": "http://api.ecelliitr.org/media_files/team/IMG_20230926_141558.jpg",
//           "quote": "Start where you are. Use what you have. Do what you can.",
//           "fblink": "https://www.facebook.com/vandit.khanna.02?mibextid=ZbWKwL",
//           "linkedin": "https://www.linkedin.com/in/vandit-khanna-703b19186/",
//           "member_type": "Heads"
//         }
//       ]
//     }
//   ]
  