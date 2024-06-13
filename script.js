console.log("lets start");

document.addEventListener("DOMContentLoaded", function () {

    let categoryOption = document.getElementById("categoryOption");

    if (categoryOption != null) {
        let defaultSelectedCategory = sessionStorage.getItem("categoryOption");

        if (defaultSelectedCategory != null && defaultSelectedCategory.trim() != "") {
            categoryOption.value = defaultSelectedCategory;
        }

        categoryOption.addEventListener("change", function (event) {
            sessionStorage.setItem("categoryOption", event.target.value);
            reloadData();
        });

        reloadData();
    }

/* other pages script for each alag 
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
                    <img class="notes-group-img" src="notesimg/web-development.png" width="75px">
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
                        "Name": "SEMISTER-I NOTES",
                        "Notes": [
                            {
                                "Subject": "Math",
                                "converImage": "image1.jpg",
                                "NotesUrl": "notes1.pdf"
                            },
                            {
                                "Subject": "Physics",
                                "converImage": "image2.jpg",
                                "NotesUrl": "notes2.pdf"
                            }
                        ]
                    },
                    {
                        "Name": "SEM II",
                        "Notes": [
                            {
                                "Subject": "Chemistry",
                                "converImage": "image3.jpg",
                                "NotesUrl": "notes3.pdf"
                            },
                            {
                                "Subject": "Biology",
                                "converImage": "image4.jpg",
                                "NotesUrl": "notes4.pdf"
                            }
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
                                "Subject": "Advanced Math",
                                "converImage": "image5.jpg",
                                "NotesUrl": "notes5.pdf"
                            },
                            {
                                "Subject": "Computer Science",
                                "converImage": "image6.jpg",
                                "NotesUrl": "notes6.pdf"
                            }
                        ]
                    },
                    {
                        "Name": "SEM II",
                        "Notes": [
                            {
                                "Subject": "Machine Learning",
                                "converImage": "image7.jpg",
                                "NotesUrl": "notes7.pdf"
                            },
                            {
                                "Subject": "Data Science",
                                "converImage": "image8.jpg",
                                "NotesUrl": "notes8.pdf"
                            }
                        ]
                    }
                ]
            },
            {
                "Name": "BSC CS",
                "Sems": [
                    {
                        "Name": "SEM I",
                        "Notes": [
                            {
                                "Subject": "Introduction to Programming",
                                "converImage": "image9.jpg",
                                "NotesUrl": "notes9.pdf"
                            },
                            {
                                "Subject": "Discrete Mathematics",
                                "converImage": "image10.jpg",
                                "NotesUrl": "notes10.pdf"
                            }
                        ]
                    },
                    {
                        "Name": "SEM II",
                        "Notes": [
                            {
                                "Subject": "Data Structures",
                                "converImage": "image11.jpg",
                                "NotesUrl": "notes11.pdf"
                            },
                            {
                                "Subject": "Algorithms",
                                "converImage": "image12.jpg",
                                "NotesUrl": "notes12.pdf"
                            }
                        ]
                    }
                ]
            },
            {
                "Name": "MSC CS",
                "Sems": [
                    {
                        "Name": "SEM I",
                        "Notes": [
                            {
                                "Subject": "Software Engineering",
                                "converImage": "image13.jpg",
                                "NotesUrl": "notes13.pdf"
                            },
                            {
                                "Subject": "Database Systems",
                                "converImage": "image14.jpg",
                                "NotesUrl": "notes14.pdf"
                            }
                        ]
                    },
                    {
                        "Name": "SEM II",
                        "Notes": [
                            {
                                "Subject": "Artificial Intelligence",
                                "converImage": "image15.jpg",
                                "NotesUrl": "notes15.pdf"
                            },
                            {
                                "Subject": "Cyber Security",
                                "converImage": "image16.jpg",
                                "NotesUrl": "notes16.pdf"
                            }
                        ]
                    }
                ]
            }
        ];

        let filterdData = data.find(cat => cat.Name == categoryName);
        if (filterdData != null) {
            return filterdData.Sems;
        }
        return [];
    }*/

});
