// Récupération des données depuis l'API
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Préparer les données pour les graphiques
        const ages = data.map(user => user.age);
        const genders = data.map(user => user.gender);

        // Données pour le graphique d'âge avec Chart.js
        const ageChart = new Chart(document.getElementById('ageChart'), {
            type: 'bar',
            data: {
                labels: data.map(user => user.first_name),
                datasets: [{
                    label: 'Âges des utilisateurs',
                    data: ages,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });

        // Données pour le graphique de genre avec Chart.js
        const genderCounts = genders.reduce((acc, gender) => {
            acc[gender] = (acc[gender] || 0) + 1;
            return acc;
        }, {});

        const genderChart = new Chart(document.getElementById('genderChart'), {
            type: 'pie',
            data: {
                labels: Object.keys(genderCounts),
                datasets: [{
                    label: 'Répartition par genre',
                    data: Object.values(genderCounts),
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']
                }]
            }
        });

        // Créer un graphique à barres avec D3.js pour l'âge
        const svg = d3.select('#d3Chart')
            .attr('width', 500)
            .attr('height', 300);

        const x = d3.scaleBand()
            .domain(data.map(d => d.first_name))
            .range([0, 480])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(ages)])
            .nice()
            .range([300, 0]);

        svg.selectAll('.bar')
            .data(ages)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d, i) => x(data[i].first_name))
            .attr('y', d => y(d))
            .attr('width', x.bandwidth())
            .attr('height', d => 300 - y(d));

        // Ajout des axes
        svg.append('g')
            .attr('transform', 'translate(0,300)')
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));
    });
