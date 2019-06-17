import React, { Component, Fragment } from 'react';

class Map extends Component {

    componentDidMount = () => {
        const saveLocation = this.props.saveLocation;

            DG.then(function () {
                
                var map,
                    marker;

                map = DG.map('map', {
                    center: [46.579, 30.797],
                    zoom: 15
                });

                marker = DG.marker([46.579, 30.797]).addTo(map).bindLabel('Мой дом', {
                    static: true
                });

                document.querySelector('.map__show').addEventListener('click', () => {
                    if(localStorage.getItem('geo')) {

                        let savedGeo = localStorage.getItem('geo').split(' ');
                        for (var i = 0; i < savedGeo.length - 1; i++) {
                            saveLocation([savedGeo[i], savedGeo[i + 1]]);
                            marker = DG.marker([savedGeo[i], savedGeo[i + 1]]).addTo(map);
                        } 
                    } else {
                        alert('Вы не имеете сохраненных маркеров.')
                    }
                })

                map.on('click', function(e) {
                    var lat = e.latlng.lat,
                    lng = e.latlng.lng;
                    saveLocation([lat, lng]);
                    marker = DG.marker([lat, lng]).addTo(map);
                })
            });
    }

     saveToLocalStorage = () => {
        localStorage.setItem('geo', this.props.location.join(' '));
    }

    render() {
        return (
            <section className="map">
                <h1 className="map__chapter">Мое местоположение</h1>
                <div id="map" style={{width: '100%', height: '400px'}}></div>
                <div className="map__wrap">
                    <button className="map__save" onClick={this.saveToLocalStorage}>Сохранить</button>
                    <button className="map__show">Показать</button>
                </div>
            </section>
            );
        }
    }
export default Map;

