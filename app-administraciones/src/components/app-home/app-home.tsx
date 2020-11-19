import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">

        <stencil-route-link url="/agencias">
          <button>agencias</button>
        </stencil-route-link>

        <stencil-route-link url="/vehiculos/stencil">
          <button>Vehiculos</button>
        </stencil-route-link>

        <stencil-route-link url="/servicios/stencil">
          <button>Servicios</button>
        </stencil-route-link>

        <stencil-route-link url="/conductores/stencil">
          <button>Conductores</button>
        </stencil-route-link>

        <stencil-route-link url="/lineas/stencil">
          <button>Lineas</button>
        </stencil-route-link>
      </div>
    );
  }
}
