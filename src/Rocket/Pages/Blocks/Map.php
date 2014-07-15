<?php namespace Rocket\Pages\Blocks;

class Map extends AbstractBlock {

    /**#@+
     * Block type name
     */
    const TYPE = 'map';
    /**#@-*/

    public function make()
    {
        $mapId = md5('myMap');
        $output = '<div class="google-map" id="' . $mapId . '"></div>' . "\n";
        $output .= '<script type="text/javascript">
            function initialize() {
                new GMap(document.getElementById(\'' . $mapId . '\'), {
                    // The initial Map center. Required
                    center: new google.maps.LatLng( 50.735876, 4.23512 ),

                    // The maximum zoom level which will be displayed on the map.
                    // If omitted, or set to null, the maximum zoom from the
                    // current map type is used instead.
                    maxZoom: 16,

                    // The enabled/disabled state of the Pan control
                    panControl: false,

                    // The initial enabled/disabled state of the Street View
                    // Pegman control. This control is part of the default UI,
                    // and should be set to false when displaying a map type on
                    // which the Street View road overlay should not appear
                    // (e.g. a non-Earth map type).
                    streetViewControl: false,

                    // The initial Map zoom level. Required
                    zoom: 8,

                    // The display options for the zoom control
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    }
                }, ' . json_encode($this->data) . ');
            };

            function loadScript() {
                var script = document.createElement(\'script\');
                script.type = \'text/javascript\';
                script.src = \'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&\' +
                    \'callback=initialize\';
                document.body.appendChild(script);
            }

            window.onload = loadScript;
        </script>' . "\n";

        return $output;
    }

    /**
     * Convert the block to it's string represantation
     *
     * @return string
     */
    public function __toString()
    {
        return $this->make();
    }
}


