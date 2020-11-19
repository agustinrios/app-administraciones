import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-agencias',
  styleUrl: 'app-agencias.scss',
  shadow: true,
})
export class AppAgencias {
  render() {
    return (
      <div class="app-home">
          <h1>desde agencia</h1>
      </div>
    );
  }
}