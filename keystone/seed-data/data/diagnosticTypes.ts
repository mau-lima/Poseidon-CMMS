export const diagnosticTypes = [
    {
      id: "366a5ca1-437a-4f8e-8a80-2dd084deb815",
      name: "Pérdida de paquetes LORA - Muerte súbita",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: true,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "ceb9c6a0-b60c-47c1-a2fa-ecbdc5a76cb0",
      name: "Presión en 0mA (203)",
      typeId:  "ad8e1c40-e608-4b09-afd5-7536226b9e43",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: true,
      pressure_difference: false,
    },
    {
      id: "477c84cf-77b5-42bb-a09d-ef49ce0e4607",
      name: "Presiones inválidas (203)",
      typeId:  "ad8e1c40-e608-4b09-afd5-7536226b9e43",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: true,
      pressure_difference: false,
    },
    {
      id: "233591de-19e8-460d-b91e-232bf49faaff",
      name: "Pérdida de paquetes LORA - Ubicación",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: true,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: true,
      node_to_gateway_distance_in_meters: true,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: true,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "b1ceffee-6b55-426f-8169-f1be47ed3bdf",
      name: "Pérdida de paquetes LORA - Horario",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: true,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: true,
      to_hour: true,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "713b6351-c6a0-4544-bb33-c3f9c5df79e4",
      name: "Posiciones GPS inválidas",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: true,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "66bf484a-5d4b-4e5e-83c5-583b3eb23572",
      name: "Intermitencia satelital - Ubicación",
      typeId:  "12b1d619-4bee-423d-bafd-51a6f153d16a",
      gateway_satellite_power: true,
      angles: true,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "2717fca4-d203-482e-ac82-2b80b8455414",
      name: "Intermitencia satelital - Alimentación",
      typeId:  "12b1d619-4bee-423d-bafd-51a6f153d16a",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: true,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "25b28552-9cbc-41ae-ae19-52229c008500",
      name: "Presión medida distinta de real",
      typeId:  "ad8e1c40-e608-4b09-afd5-7536226b9e43",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: true,
    },
    {
      id: "8643ce8e-eb1d-4da7-9b15-595b51299f30",
      name: "Sin datos de GTW",
      typeId:  "12b1d619-4bee-423d-bafd-51a6f153d16a",
      gateway_satellite_power: true,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "e787956a-3782-4f1e-9c0b-846b5d2bb91e",
      name: "Pérdida de paquetes LORA - Desde inicio de datos",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: true,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: true,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
    {
      id: "b2972985-0b78-40ba-afbf-4b7f2bf674df",
      name: "Oscilación de presión",
      typeId:  "ad8e1c40-e608-4b09-afd5-7536226b9e43",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: false,
      node_to_gateway_distance_in_meters: false,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: true,
    },
    {
      id: "c0a094e1-a79c-4f82-b62a-9a7617af1e10",
      name: "Pérdida de paquetes LORA - Intermitente",
      typeId:  "bf2030f3-d1be-4840-ad9f-7d610e9384bf",
      gateway_satellite_power: false,
      angles: false,
      packet_202_count: false,
      battery_2to3: false,
      positions: false,
      lost_packets: true,
      node_to_gateway_distance_in_meters: true,
      gateway_first_data_transmission_date: false,
      height_difference_in_meters: false,
      from_hour: false,
      to_hour: false,
      packet_203_count: false,
      pressure_difference: false,
    },
  ];