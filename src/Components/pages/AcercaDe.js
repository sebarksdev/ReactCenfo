import React from 'react';
import { Container } from 'react-bootstrap';

function AcercaDe(location) {


    return (

        <Container style={{ marginTop: '100px' }} >
            <div className="container text-center">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={'2'}>
                                Curso: Desarrollo de aplicaciones web con React
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={'2'}>
                                Profesora: sdfasdasdfasdfasd
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Estudiantes:
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        Ronald Salazar Cortes
                                    </li>
                                    <li>
                                        Luis Ruiz
                                    </li>
                                    <li>
                                        Sebastian
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    )

}

export default AcercaDe;

