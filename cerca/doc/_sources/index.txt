===================
cerca documentation
===================
*Distance measurement system*

:Author: Pedro I. López
:Contact: dreilopz@gmail.com
:License: `Creative Commons Attribution 3.0 Unported License <http://creativecommons.org/licenses/by/3.0/>`_
:Date: |today|
:Version: 1.0.4

Project's website: http://www.dreilopz.me/cerca

Video demonstration: http://youtu.be/OE_qz_wE0Hs

.. figure:: _static/cerca_picture.png

.. toctree::
   :hidden:

   cuc_source_code

.. _section:introduction:

Introduction
============

Project **cerca** is a PC-based distance measurement system, developed
for the school course *482 - TÓPICOS SELECTOS DMI I* [#]_ at `FIME
<http://www.fime.uanl.mx>`_ `UANL <http://www.uanl.mx>`_.  cerca has
only been tested on Windows XP and Fedora 15 but should work on Windows
Vista, Windows 7, Mac OS X, and most Linux distributions.  The software
is implemented in Python 2 and C.  cerca was designed and implemented by
Pedro I. López [dreilopz@gmail.com].  The project is publicly released
for educational purposes and under permissive licenses.

The sections :ref:`section:system_elements` and
:ref:`section:system_design` list (symbolic) names of different elements
of the system that are used throughout the document.

.. note:: In this document the standard Unix-like path notation is used.

.. note:: Every path is relative to the project's distribution main
   directory.

System requirements
===================

- Supported operating system:

  - Windows XP (tested)
  - Windows Vista
  - Windows 7
  - Most Linux distributions (tested on Fedora 15)
  - Mac OSX

- 1 serial port RS232.

.. Note:: If your computer doesn't have a physical serial port you will
  need to use an adaptor, for example an USB-RS232 adaptor with a
  compatible driver.

.. _section:system_elements:

System elements
===============

.. Note:: See section :ref:`section:system_design` for other system-wide
   definitions.

.. csv-table:: **System components**
   :widths: 1,40,100,30
   :header-rows: 1

   *quantity*,*element*,*description*,*symbolic name*
   1,PC,Personal computer with compatible operating system,\-
   1,Object,Solid object,**OBJ**
   1,ATMEGA88PA,8-bit microcontroller,\-
   1,4N26,Opto-isolator,\-
   1,"4 :math:`\mathrm{MHz}` crystal",Standard frequency crystal,\-
   2,"22 :math:`\mathrm{pF}` capacitor",Capacitor for oscilator subcircuit,\-
   1,Stripboard,"7 x 14.5 :math:`\mathrm{cm}` stripboard",\-
   1,"0.1 :math:`\mu \mathrm{P}` capacitor",\-,\-
   1,Power terminal,\-
   2,"330 :math:`\Omega`, ½ :math:`\mathrm{W}` resistor",\-,\-
   1,"100 :math:`\Omega`, ½ :math:`\mathrm{W}` resistor",\-,\-
   1,"220 :math:`\Omega`, ½ :math:`\mathrm{W}` resistor",\-,\-
   1,GP2Y0A21YK,Distance measurement infrared sensor,\-
   1,Blue LED,5 :math:`\mathrm{mm}` LED,**VISOUT**
   1,White LED,5 :math:`\mathrm{mm}` LED,**STATUSLED**
   1,PRT-00449,RS232 shifter,\-
   1,Buzzer,"3.7 :math:`\mathrm{kHz}`, 3-24 :math:`\mathrm{V}`, 95 :math:`\mathrm{dB}`",**AUDOUT**
   1,28-pin IC base,\-,\-
   1,8-pin IC base,\-,\-
   4,Generic screws,\-,\-
   1,Power switch,\-,\-
   1,Power jack,\-,\-
   1,Project case,Plastic project case,\-
   1,RS232 cable,\-,\-
   1,Power supply,"5 :math:`\mathrm{V}` 1 :math:`\mathrm{A}`",**PS**

.. _section:system_design:

System design
=============

.. Note:: See section :ref:`section:system_elements` for other
   system-wide definitions.

Project cerca's purpose is to measure the distance between a
solid object and the system, indicating this data to the user through an
audiovisual signal.  The distance to be measured is in the range of
10 to 80 :math:`\mathrm{cm}` [SENSOR]_, and is the relative proximity
between the optical sensor and a solid object.  Output is reported (a)
visually through VISOUT and the live plotting on the PC if logging is on
and (b) audibly through AUDOUT.  As OBJ gets closer to the GP2Y0A21YK
the on-off period of VISOUT decrements, and viceversa.  The case for the
auditory signal through AUDOUT is analogous.

As stated in the section :ref:`section:introduction`, cerca is a
project developed for a school course.  The following are factors
influencing the project's design and implementation:

- High priority

  - Low implementation time.

  - Portability across different systems.

  - Simple design.

  - Low cost.

- Low priority

  - Extensibility.

  - Ease of use.

  - Ease of installation.

  - Tight integration of the subsystems.

.. _fig:cerca_system_diagram:

.. figure:: _static/cerca_system_diagram.png
   :scale: 80 %

   cerca's system diagram.

The project is split in 2 subsystems connected through a serial
communication in a client-server architecture (see Figure
:ref:`fig:cerca_system_diagram`):

**cuc**
  (server) Main acquisition system, an electronic circuit including the
  ATMEGA88PA, GP2Y0A21YK (sensor), AUDOUT, VISOUT and PRT-00449 (RS232
  level shifter), all enclosed in a project case.

**cpc**
  (client) PC and ``cpc.py`` Python program.  Optionally run to
  live-plot the acquisition and log the data to a file.

Subsystems
==========

cuc
---

.. figure:: _static/cerca_picture1.png

**cuc** is the main data acquisition system, an electronic circuit
including the ATMEGA88PA, GP2Y0A21YK (sensor), AUDOUT, VISOUT and
PRT-00449 (RS232 level shifter), all enclosed in a project case.  cerca
and cuc have 2 operation modes:

:Normal mode:
  cuc operates on its own without cpc, outputting the proximity to OBJ
  without units.  This is the default mode when cuc is turned on.

:Serial mode:
  cpc makes cuc enter serial mode through the serial connection, see
  section :ref:`section:operation`.  In addition to the normal mode
  functionality, cerca plots the proximity versus time and displays it
  in :math:`\mathrm{cm}`.  STATUSLED blinks faster.

The ATMEGA88PA program
:ref:`section:cuc_c_source_code` periodically executes the following
tasks:

#. Analog to digital conversion of the GP2Y0A21YK's output voltage,
   storing the result in a global variable (see :c:func:`ADC0_value`,
   :c:func:`set_distance` and :c:data:`DISTANCE`).

#. Updating the on-off period of VISOUT and AUDOUT using a timer that
   generates a square wave at the ATMEGA88PA'S OC1A pin.  The period of
   this signal is proportional to the distance measurement between
   GP2Y0A21YK and OBJ (see :c:func:`signal_update`).

#. Send data (if) requested by cpc through serial transmission
   interruptions (see :ref:`ISR(USART_RX_vect) <function:usart_isr>`).

.. _section:cuc_c_source_code:

cuc.c
~~~~~

:doc:`cuc_source_code`.  Developed with `avr-libc
<http://www.nongnu.org/avr-libc/>`_.  Run on ATMEGA88PA inside cuc.

.. automodule: cuc

.. c:var:: volatile unsigned char MODE

   cuc's operation mode, one of {``SERIAL_MODE``, ``NORMAL_MODE``}.
   When :c:data:`MODE` is ``SERIAL_MODE``, STATUSLED blinks faster.  See
   :c:data:`MODE_DELAY`.

.. c:var:: volatile unsigned int MODE_DELAY

   Sets STATUSLED blinking delay depending on what mode cuc is on (see
   :c:data:`MODE`).

.. c:var:: volatile unsigned int DISTANCE

   Number proportional to the distance between the GP2Y0A21YK and OBJ,
   stores the result of the analog to digital conversion of GP2Y0A21YK
   output.

.. _function:timer1_isr:

.. c:function:: ISR(TIMER1_COMPA_vect)

   TIMER1 interrupt handler.  The sampling of GP2Y0A21YK data is done
   here if operating in ``NORMAL_MODE``, otherwise the sampling is
   performed at :ref:`ISR(USART_RX_vect) <function:usart_isr>`.

.. _function:usart_isr:

.. c:function:: ISR(USART_RX_vect)

   USART interrupt handler.  The sampling of GP2Y0A21YK output is
   performed here if operating in ``SERIAL_MODE``, otherwise it is done
   at :ref:`ISR(TIMER1_COMPA_vect) <function:timer1_isr>`.  Sends
   conversion value to cpc when requested.

.. c:function:: unsigned char ReadUSART(void)

   Reads 1 byte from USART's buffer.

.. c:function:: void WriteUSART(unsigned char byte)

   Writes 1 byte to USART's buffer.

.. c:function:: void signal_update(unsigned int timer1_top)

   Updates the square wave signal that drives VISOUT and AUDOUT.

.. c:function:: void TIMER1_off(void)

   Turns TIMER1 off.

.. c:function:: void TIMER1_on(void)

   Turns TIMER1 on.

.. c:function:: unsigned int ADC0_value(void)

   Perform analog to digital conversion and return the result.

.. c:function:: void set_distance(void)

   Updates the distance value in :c:data:`DISTANCE`.

.. c:function:: void ioinit(void)

   I/O system initialization (UART, TIMER1, STATUSLED, ADC).

.. c:function:: int main(void)

   Main function, call :c:func:`ioinit` then enter a infinite loop
   blinking STATUSLED with a delay that depends on the operation mode
   (:c:data:`MODE` and :c:data:`MODE_DELAY`).

Circuit
~~~~~~~

.. _fig:cuc_circuit_diagram:

.. figure:: _static/cuc_circuit_diagram.png
   :alt: cuc circuit diagram
   :scale: 80 %

   cuc: Circuit diagram.

.. _fig:cuc_circuit_protoboard:

.. figure:: _static/cuc_circuit_protoboard.png
   :alt: cuc circuit on protoboard
   :scale: 80 %

   cuc: Circuit implemented on protoboard.

.. _fig:cuc_circuit:

.. figure:: _static/cuc_circuit.png
   :alt: cuc circuit
   :scale: 80 %

   cuc: Circuit board.

.. _fig:cuc_dev_building0:

.. figure:: _static/cuc_dev_building0.png
   :alt: cuc circuit in project case.
   :scale: 80 %

   cuc: Circuit board in project case.

.. _fig:cuc_dev_tests0:

.. figure:: _static/cuc_dev_tests0.png
   :alt: cuc testing
   :scale: 80 %

   cuc: Testing.

.. figure:: _static/cuc_case_0.png
   :alt: cuc case
   :scale: 80 %

   cuc: Final version.

.. figure:: _static/cuc_case_1.png
   :alt: cuc case
   :scale: 80 %

   cuc: Final version.

.. figure:: _static/cuc_case_2.png
   :alt: cuc case
   :scale: 80 %

   cuc: Final version.

cpc
---

PC and :ref:`section:cpc_python_program` Python program.  cpc and cuc
are connected through a serial connection.

.. _section:cpc_python_program:

cpc.py
~~~~~~

Graphical application that live-plots and logs to a file the acquired
data through cuc.  See screenshot in Figure :ref:`fig:cpc_logging` and
section :ref:`section:operation`.

.. automodule:: cpc

.. py:class:: UC

   cuc software abstraction.

   .. py:method:: __init__(port=None)

      :param port: serial port abstraction instance.
      :type port: :py:class:`cpc.serial.Serial`

   .. py:attribute:: adc0D

      :rtype: int

      Gets :c:data:`DISTANCE` from cuc and returns it.

   .. py:attribute:: distance

      :rtype: float

      Computes actual distance measurement in cm [SENSOR1]_.

   .. py:method:: execute_command(*command)

      :param command: cuc's commands to execute (reading/writing data).
      :type command: sequence

      Execute the command(s) in ``command`` through the serial
      connection.

   .. py:attribute:: status

      :rtype: char

      Reports cuc's status.

   .. py:attribute:: mode

      :rtype: char

      Reports :c:data:`MODE`.

   .. py:method:: set_mode(mode)

      :param mode: {:py:data:`SERIAL_MODE`, :py:data:`NORMAL_MODE`)

      Sets :c:data:`MODE`.

.. py:class:: PlotPanel(wx.Panel)

   Update and display a plot periodically.  Uses a
   :py:class:`cpc.wx.Timer`.

   .. py:method:: onTimer(evt)

      Called periodically to sample distance and update plot.

.. py:class:: MainFrame(wx.Frame)

   Main wxPython application frame.

   .. py:method:: toggle_on_off(event)

      Event handler that starts and stops periodic sampling.

.. py:class:: Cerca(wx.App)

   Main wxPython application object.

   .. py:method:: OnInit

      Choose the system serial port to use, select the directory and
      filename of the log file. open the serial port and create the cuc
      software abstraction (:py:class:`UC`).

   .. py:method:: OnExit

      Close the serial port.

.. py:function:: scan()

   Scan available serial ports.

Installation
============

#. Install cpc dependencies:

   #. Install *Python* >=2.7.1 CPython implementation; see `Python Setup
      and Usage <http://docs.python.org/using/index.html>`_, sections
      2.1, 3.1 and/or 4.1.

   #. Install *pySerial* >=2.5; see `pySerial
      <http://pyserial.sourceforge.net/pyserial.html>`_, section
      *Installation*.

   #. Install *wxPython* >= 2.8 (unicode); see `Downloads & Stuff
      <http://wxpython.org/download.php>`_, section *Stable Release* and
      follow the instructions that correspond to your platform/OS.

   #. Install *matplotlib* >=1.0.1; see `Installing
      <http://matplotlib.sourceforge.net/users/installing.html>`_.

#. Extract the cerca distribution package to a directory of your choice.

Your cerca is now installed and ready to be operated.

.. _section:operation:

Operation
=========

Follow these steps to operate cerca.

.. Note:: The screenshots provided are from cpc executed on Windows XP.

#. Plug the RS232 cable to the case and to your computer, either
   directly or through an adaptor.

#. Position the case wherever you are performing the measurement.

#. Plug PS to the cuc.

#. Power up PS.

#. Turn cuc on.

#. Change current directory to ``cpc`` and execute the file ``cpc.py``.

#. Choose the serial port to use, see Figure
   :ref:`fig:cpc_choosing_serial_port`.

   .. _fig:cpc_choosing_serial_port:

   .. figure:: _static/cpc_choosing_serial_port.png
      :alt: choosing a serial port in cpc

      cpc: Choosing a serial port.

#. Browse for the directory where you will save the log file, see Figure
   :ref:`fig:cpc_browse_directory`.

   .. _fig:cpc_browse_directory:

   .. figure:: _static/cpc_browse_directory.png
      :alt: cpc browse directory

      cpc: Browse for directory to save log file.

#. Enter a filename for the log file.  Make sure to use the extenstion
   ``csv``.  See Figure :ref:`fig:cpc_log_filename`.

   .. _fig:cpc_log_filename:

   .. figure:: _static/cpc_log_filename.png
      :alt: cpc choose log filename

      cpc: Enter a filename for the log file.

#. Figure :ref:`fig:cpc_before_logging` shows the cpc window before
   starting logging.  Toggle the OFF button on screen to start logging
   in serial mode (STATUSLED blinks faster).

   .. _fig:cpc_before_logging:

   .. figure:: _static/cpc_before_logging.png
      :alt: cpc before logging
      :scale: 70 %

      cpc: Window before starting logging.

#. The system is measuring the distance between cuc and OBJ, and
   reporting the acquired data through VISOUT, SOUT and the live plotting
   on PC;  see Figure :ref:`fig:cpc_logging`.  You can stop the logging
   by pressing the button again, effectively returning to normal mode.
   Even when not logging VISOUT and SOUT will still report.  If the
   measurement is out of range the window will look like Figure
   :ref:`fig:cpc_out_of_range`.

   .. _fig:cpc_logging:

   .. figure:: _static/cpc_logging.png
      :alt: cpc logging
      :scale: 70 %

      cpc: Logging the measurement.

   .. _fig:cpc_out_of_range:

   .. figure:: _static/cpc_out_of_range.png
      :alt: cpc out of range
      :scale: 70 %

      cpc: Out of range measurement.

#. To exit cpc just close the window.

#. Turn cuc off (black switch).

#. Power off PS.

#. Unplug RS232 cable.

TODO
====

#. Improve cuc and cpc documentation.

Footnotes
=========

.. [#] The complete name of the school subject is *Tópicos selectos de
   diseño de máquinas inteligentes*, which is spanish for *selected
   topics for intelligent machines design*.

References
==========

.. [SENSOR] *GP2Y0A21YK/GP2Y0D21YK General Purpose Type Distance
   Measuring Sensors*.  Sharp.  Retrieved March 2, 2012, from
   http://www.sparkfun.com/datasheets/Components/GP2Y0A21YK.pdf.

.. [SENSOR1] *Sensing distance (SHARP GP2Y0A21YK)*.  **oomlout**.
   Retrieved March 4, 2012, from http://oomlout.com/PROX/PROX-Guide.pdf.

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
