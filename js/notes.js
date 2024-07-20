
async function reloadData() {
    let categoryOption = document.getElementById("categoryOption");
    let defaultSelectedCategory = sessionStorage.getItem("categoryOption");

    if (defaultSelectedCategory == null) {
        defaultSelectedCategory = "BSC-IT"
    }

    let data = await loadData(defaultSelectedCategory);


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
                <img class="notes-group-img" src="/notesimg/${element.converImage}" width="75px" onerror="this.onerror=null;this.src='/notesimg/default-notes-img.png';">
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
                            "converImage": "MATSH SEM 1.png",
                            "NotesUrl": "https://drive.google.com/file/d/1z_sjSCMeMoqYO2sKo1mFRq1fHfyAbg6W/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Operating System",
                            "converImage": "OS.png",
                            "NotesUrl": "https://drive.google.com/file/d/1zTPyOZFpMyShWtYL5_5nDMFRxrOIs3Vw/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Digital Electronics",
                            "converImage": "de.png",
                            "NotesUrl": "https://drive.google.com/file/d/1z_PeX6AcaXkC1KANQ4qzteu_CRhFvv5k/view?usp=drivesdk"
                        },
                        {
                            "Subject": "C Programming (IP)",
                            "converImage": "c.png",
                            "NotesUrl": "https://drive.google.com/file/d/1zhH0Xm2r2ilSJQn4Kyn4SEx0IJAb73W1/view?usp=drivesdk"
                        },
                        {
                            "Subject": "DBMS",
                            "converImage": "database-management.png",
                            "NotesUrl": "https://drive.google.com/file/d/1zoxyZL6Z1c5FRmyf_pVFUF9vvdcB5An2/view?usp=drivesdk"
                        },

                    ]
                },
                {
                    "Name": "SEMESTER-II ",
                    "Notes": [
                        {
                            "Subject": "NSM SEM-II",
                            "converImage": "NSM.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-Ay-uNejYx0sQdKrP4W5ozITxSYlnlpZ/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Web Development",
                            "converImage": "web-development.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-7yRM0_hzWMbwx8nywH-KxA_y_-12BrV/view?usp=drivesdk"
                        },
                        {
                            "Subject": "OOPS (C++)",
                            "converImage": "CPP.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-7hxMVVFOrwAl0UBWwxAJqF03n5gOJC8/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Computer Graphics",
                            "converImage": "computer-graphic.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-68WGShY275FUlANnC-jWyB7awEQ7Tlu/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Microprocessor",
                            "converImage": "MICROPROSSER.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-BSzZxEnfj9FUruKBIvVhIcqTJL68Jln/view?usp=drivesdk"
                        },
                       
                    ]
                },
                {
                    "Name": "SEMESTER-III ",
                    "Notes": [
                        {
                            "Subject": "DSA",
                            "converImage": "DSA.jpg",
                            "NotesUrl": "https://drive.google.com/drive/folders/16ulRRxF7yRP6zhE6GZS8miJ4jpkSz1Y4"
                        },
                        {
                            "Subject": "Computer Network",
                            "converImage": "Cn.WEBP",
                            "NotesUrl": "https://drive.google.com/drive/folders/14FLIU1yFJuLTdJRaEdDsdr4IL2DL6Lbs"
                        },
                        {
                            "Subject": "Python",
                            "converImage": "PYTHON.PNG",
                            "NotesUrl": "https://drive.google.com/drive/folders/16ryH1diqOdfIbex6qroABTtJ3kQDga98"
                        },
                        {
                            "Subject": "PL/SQL",
                            "converImage": "PL.PNG",
                            "NotesUrl": "https://drive.google.com/drive/folders/16ugds4t7eUxD4OcLyWsFyQqT2vQNYs-I"
                        },
                        {
                            "Subject": "AM",
                            "converImage": "am.jpg",
                            "NotesUrl": "https://drive.google.com/drive/folders/16zCCXTGv92v9RwOwRlg-tiMZkPJw9jnm"
                        },
                        {
                            "Subject": "Brand Management",
                            "converImage": "Bm.avif",
                            "NotesUrl": "https://drive.google.com/drive/folders/16zCCXTGv92v9RwOwRlg-tiMZkPJw9jnm"
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
                            "converImage": "image5.jpg",
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

