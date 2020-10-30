var planets = new Array();
        planets[0] = "HibbiJibbi"
        planets[1] = "Mercury ";
        planets[2] = "Venus ";
        planets[3] = "Earth ";
        planets[4] = "Mars ";
        planets[5] = "Jupiter ";
        planets[6] = "Saturn ";
        planets[7] = "Uranus ";
        planets[8] = "Neptune ";

    var distance = new Array();
        distance[0] = '222.22'
        distance[1] = '35.98';
        distance[2] = '67.23';
        distance[3] = '92.96';
        distance[4] = '141.61';
        distance[5] = '483.74';
        distance[6] = '888.56';
        distance[7] = '1.79';
        distance[8] = '2.79';

    var x = 1;

        for (x = 1; x <7; x++) {
        document.write(x+ "."+ " Distance from "+ planets[x]+ "to the sun is "+ distance[x]+ " million miles. "+ "</br>");
        }

        for (x = 7; x <9; x++) {
        document.write(x+ "."+ " Distance from "+ planets[x]+ "to the sun is "+ distance[x]+ " billion miles. "+ "</br>");   
        }