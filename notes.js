
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
                <img class="notes-group-img" src="notesimg/MATSH SEM 1.png" width="75px">
                <h3 class="nots-name">${element.Subject}</h3>
                <p>Download Your Notes</p>
                <button id="downloadBtn"><a href="${element.NotesUrl}">Download Notes</a></button>`;

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
                            "NotesUrl": "https://drive.google.com/file/d/1z_sjSCMeMoqYO2sKo1mFRq1fHfyAbg6W/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Operating System",
                            "converImage": "image2.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1zTPyOZFpMyShWtYL5_5nDMFRxrOIs3Vw/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Digital Electronics",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1z_PeX6AcaXkC1KANQ4qzteu_CRhFvv5k/view?usp=drivesdk"
                        },
                        {
                            "Subject": "C Programming (IP)",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1zhH0Xm2r2ilSJQn4Kyn4SEx0IJAb73W1/view?usp=drivesdk"
                        },
                        {
                            "Subject": "DBMS",
                            "converImage": "image",
                            "NotesUrl": "https://drive.google.com/file/d/1zoxyZL6Z1c5FRmyf_pVFUF9vvdcB5An2/view?usp=drivesdk"
                        },

                    ]
                },
                {
                    "Name": "SEMESTER-II ",
                    "Notes": [
                        {
                            "Subject": "NSM SEM-II",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-Ay-uNejYx0sQdKrP4W5ozITxSYlnlpZ/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Web Development",
                            "converImage": "image4.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-7yRM0_hzWMbwx8nywH-KxA_y_-12BrV/view?usp=drivesdk"
                        },
                        {
                            "Subject": "OOPS (C++)",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-7hxMVVFOrwAl0UBWwxAJqF03n5gOJC8/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Computer Graphics",
                            "converImage": "image4.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-68WGShY275FUlANnC-jWyB7awEQ7Tlu/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Microprocessor",
                            "converImage": "image3.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/1-BSzZxEnfj9FUruKBIvVhIcqTJL68Jln/view?usp=drivesdk"
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
                            "Subject": "Mathamatics & Statics",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Economics",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Book Kepping and Accountancy",
                            "converImage": "image9.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Business Studies",
                            "converImage": "image10.jpg",
                            "NotesUrl": "https://drive.google.com/file/d/11PpbVd4Qw3G8EO17fUS4zIlu24zl_bdy/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Accountancy",
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

