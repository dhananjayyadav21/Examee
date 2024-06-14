
async function reloadData() {
    let categoryOption = document.getElementById("categoryOption");
    let defaultSelectedCategory = sessionStorage.getItem("categoryOption");

    if (defaultSelectedCategory == null) {
        defaultSelectedCategory = "BSC-IT"
    }
    console.log(defaultSelectedCategory)
    let data = await loadData(defaultSelectedCategory);
    console.log(data)

    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    data.forEach(sem => {
        const semNotesGroup = document.createElement('div');
        semNotesGroup.className = 'sem-notes-group';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-cantainer';

        const h2 = document.createElement('h2');
        h2.textContent = `${sem.Name} NOTES`;

        cardContainer.appendChild(h2);

        console.log(sem)

        sem.Notes.forEach(element => {

            const cardHTML = `
                 <div class="left">
                <img class="notes-group-img" src="/notesimg/${element.converImage}" width="50px" onerror="this.onerror=null;this.src='/notesimg/practical-III.png';">
                <p>${element.Subject}</p>
                 </div>
                <div class="right">
                <button><a href="${element.NotesUrl}">Downlode</a></button>`;

            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = cardHTML;

            cardContainer.appendChild(card);
            semNotesGroup.appendChild(cardContainer);
        });
        grid.appendChild(semNotesGroup);
    });

}


async function loadData(categoryName) {
    let data = [
        {
            "Name": "BSC-IT",
            "Sems": [
                {
                    "Name": "SEMESTER-I ",
                    "Notes": [
                        {
                            "Subject": "Math SEM-I",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-dvCKK1RG1NiUAcg3gG__QoOeCEXNGsP/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Operating System",
                            "converImage": "image2.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-dyeKVuTxgt4Y-c3DhgVXSlzKC4Kjxny/view?usp=drivesdk"
                        },
                        {
                            "Subject": "DE",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-bQf7av44Q_z3TVMlkuAPAO6iKXjju1X/view?usp=drivesdk"
                        },
                        {
                            "Subject": "IP",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-cd8eKUx9PeI1CSt95FXWWzjrTp9dkr8/view?usp=drivesdk"
                        },
                        {
                            "Subject": "DBMS",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-bNyWtaT28ArIM9Kx2JRqR9nYq0Zuz9t/view?usp=drivesdk"
                        },
                        {
                            "Subject": "English",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-bMTQ54Ggi9ZOuyw2oL3HLGvVmxo_Unt/view?usp=drivesdk"
                        },
                        {
                            "Subject": "IKS",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-bM0HDIS-2ZEkNT1piJng6x-p1YTYXnw/view?usp=drivesdk"
                        },
                        {
                            "Subject": "COI",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-aGyYSl6mYT_ZXJkyKMeYzJHVzsoWfpO/view?usp=drivesdk"
                        },
                        {
                            "Subject": "YOGA",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-Yaakl1ImCw4Nc71rz9EtgbYxOccJ2BT/view?usp=drivesdk"
                        },

                    ]
                },
                {
                    "Name": "SEMESTER-II ",
                    "Notes": [
                        {
                            "Subject": "NSM SEM-II",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-qKuhyI2mj-GZ2YYtSPwUEEPEj0cWuVF/view?usp=drivesdk"
                        },
                        {
                            "Subject": "WP",
                            "converImage": "image4.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-rq64tw7KU62czhc6um9yhRmQqEPkdr-/view?usp=drivesdk"
                        },
                        {
                            "Subject": "OOPS (C++)",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-wrNJ8gWAp6vksJUl_1Zqwz46BKBqCS4/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Computer Graphics",
                            "converImage": "image4.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-z_hz2NR3Duwu34ILioEOuzUoCjJvGH2/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Micro-processor",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-zMlrH24qJ4_2hrkwzrhr3woG7RDC10u/view?usp=drivesdk"
                        },
                        {
                            "Subject": "English-II",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/105xs2OrXO0gnnFLmHaDGDJuEm4S1SSBO/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Green Computing",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/101mXmU4UoXdaSkA-MF3CWqR3-d7yUD5H/view?usp=drivesdk"
                        },
                        {
                            "Subject": "POM",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1-xcCDtwsGT2MjvMwuwwUeiq125Cdt3gd/view?usp=drivesdk"
                        },
                        {
                            "Subject": "YOGA-II",
                            "converImage": "image",
                            "NotesUrl":"https://drive.google.com/file/d/108SupchMGFLd79APj8dc0-xVn-HQrVWZ/view?usp=drivesdk"
                        },

                    ]
                }
            ]
        },
        {
            "Name": "MSC-IT",
            "Sems": [
                {
                    "Name": "SEM I",
                    "Notes": [
                        {
                            "Subject": "Data Mining",
                            "converImage": "image5.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Distributed System",
                            "converImage": "image6.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Data Analysis Tools",
                            "converImage": "image5.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Software Testing",
                            "converImage": "image6.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdkf"
                        }
                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [
                        {
                            "Subject": "Mobile Computing",
                            "converImage": "image7.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Advanced Computer Networks",
                            "converImage": "image8.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Cloude Computing",
                            "converImage": "image7.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Advanced Database System",
                            "converImage": "image8.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        }
                    ]
                }
            ]
        },
        {
            "Name": "B.COM",
            "Sems": [
                {
                    "Name": "B.COM",
                    "Notes": [
                        {
                            "Subject": "Bachelor of Commerce",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Accounting & Finance",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Banking & Insurance",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Fincial Marketing",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        }

                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [

                    ]
                }
            ]
        },
        {
            "Name": "12TH-SCIENCE",
            "Sems": [
                {
                    "Name": "12TH-SCIENCE",
                    "Notes": [
                        {
                            "Subject": "Maths-I",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Maths-II",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Physics",
                            "converImage": "image14.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Chemistry",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Biology",
                            "converImage": "image13.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },

                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [

                    ]
                }
            ]
        },
        {
            "Name": "12TH-COMMERCE",
            "Sems": [
                {
                    "Name": "12TH-COMMERCE",
                    "Notes": [
                        {
                            "Subject": "Maths",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Economics",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Book Kepping ",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Business Studies",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Account-ancy",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        }

                    ]
                },
                {
                    "Name": "SEM II",
                    "Notes": [

                    ]
                }
            ]
        },

    ];

    let filterdData = data.find(cat => cat.Name == categoryName);
    if (filterdData != null) {
        return filterdData.Sems;
    }
    return [];
}