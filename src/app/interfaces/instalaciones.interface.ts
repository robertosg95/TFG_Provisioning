

export interface Instalaciones {
  ID_cliente: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  modelo_router: string;
  SN: string;
  usuario_ppoe: string;
  contrasena_ppoe: string;
  perfil_configuracion: string;
  habilitar_wifi: boolean;
  SSID: string;
  contrasena_wifi: string;
  habilitar_voip: boolean;
  telefono: string;
  contrasena_telefono: string;
  usuario_web: string;
  contrasena_web: string;
  key$?: string;
  nombre_puerto?: string;
  direccion_puerto?: string;
  protocolo_puerto?: string;
  puerto_inicio?: string;
  puerto_fin?: string;
  direccion_ip?: string;
  mascara?: string;
  dhcp_inicio?: string;
  dhcp_fin?: string;
  dns_primario?: string;
  dns_secundario?: string;
}
