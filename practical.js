
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
        h2.textContent = `${sem.Name} PRACTICALS`;

        cardContainer.appendChild(h2);

        console.log(sem)

        sem.Notes.forEach(element => {

            const cardHTML = `
                <img src="/notesimg/${element.converImage}" width="70px" onerror="this.onerror=null;this.src='/notesimg/practical-III.png';">
                    <h3 class="tital">${element.Subject}</h3>
                    <p>Download Journal Here</p>
                    <button id="downloadBtn"><a href="${element.NotesUrl}">Journal PDF</a></button>`;

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
                            "Subject": "Math (DM)",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-N3PaBhkjZzhA7F2IdDps2jaxvRg5U12/view?usp=drivesdk"
                        },
                        {
                            "Subject": "Operating System",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-MP2TP9fdJC6K930pvejxAYketVl8Ns2/view?usp=drivesdk"
                        },
                        
                        {
                            "Subject": "C Programming (IP)",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-NtrQ92tCdD446yscRn9C_njU8Q4R63a/view?usp=drivesdk"
                        },
                        {
                            "Subject": "DBMS",
                            "converImage": "practical-II.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-OOvTaamHI7X3pu5lHa5jpDIAYkvqNGh/view?usp=drivesdk"
                        },

                    ]
                },
                {
                    "Name": "SEMESTER-II ",
                    "Notes": [
                        {
                            "Subject": "Web Development",
                            "converImage": "practical-I.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-QI0VwfweTO0rJAAp5Cd2g0XowyiwZF7/view?usp=drivesdk"
                        },
                        {
                            "Subject": "OOPS (C++)",
                            "converImage": "practical-I.png",
                            "NotesUrl": "https://drive.google.com/file/d/1-Rqw-vrIDraXpmBv9FqkMAwC9kVMgynf/view?usp=drivesdk"
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
            "Name": "COMMERCE",
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
