==========================
printer73x's documentation
==========================
-------------------------------
A CNC printer for binary images
-------------------------------

:Author: Pedro I. López [dreilopz@gmail.com]
:License: `Creative Commons Attribution 3.0 Unported License <http://creativecommons.org/licenses/by/3.0/>`_
:Date: |today|

`Project's website <http://www.dreilopz.me/printer73x>`_.

`Videos <http://www.youtube.com/playlist?list=PL7141B5B35BD03A5E>`_.

.. figure:: ../../printer73x.png
   :scale: 60 %
   :alt: printer73x picture.

   printer73x.

.. _section:introduction:

Introduction
============

**printer73x** is a CNC system for printing binary images.  printer73x
was developed for the school courses *734 - PROYECTO DE IMTC I* and *735
- PROYECTO DE IMTC II* (spanish for *mechatronics project*) at `FIME
<http://www.fime.uanl.mx/en/>`_ `UANL <http://www.uanl.mx/>`_.
printer73x has only been tested on Windows XP and Fedora 15 but will
work on Windows Vista, Windows 7, Mac OS X, and most Linux
distributions.  The software is written mainly in Python and MATLAB.

printer73x 1.0 is released for educative purposes.  I'm (Pedro I.
López) currently trying to persuade the mechanical design team to
publicly release the documentation for the structure (*printerm*), but
for the moment this distribution doesn't include it.

The following people were involved in the development and funding of
printer73x.

Mechanical design and implementation:

  - Ulises Acosta Muñiz

  - Javier Longoria

  - Gregorio Reyes Banda

  - Abraham Arturo Silva Flores

Software and electronic design and implementation:

  - Iván García González

  - Pedro I. López [dreilopz@gmail.com]

The sections :ref:`section:physical_components` and
:ref:`section:design` list symbolic names of different elements of the
systems that are used throughout the document.

.. note:: In this document the standard Unix-like path notation is used.

.. note:: Every path is relative to the project's distribution main
   directory.

.. _section:design:

System requirements
===================
Hardware and software requirements.

- Supported operating system:

  - Windows XP (tested)
  - Windows Vista
  - Windows 7
  - Most Linux distributions (tested on Fedora 15)
  - Mac OSX

- 1 USB port.

- MATLAB >7.0.

Design
======

As stated in the section :ref:`section:introduction`, printer73x is a
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

printer73x is CNC printer that reproduces an image selected from the PC.
The machine tool is a pen that is translated across the 3 axes of the
machine.  The :math:`X` and :math:`Y` axes form a finite plane in which
the pen translates, with each position equivalent to a pixel location in
the image.  In any position the pen is able to translate across the
:math:`Z` axis to print color in the pixel location.

Stepper motors are used to drive the translation across the :math:`X`
and :math:`Y` axes.  There are only two possible positions the pen can
have across the :math:`Z` axis (either print the present pixel or not),
so in this case a servomotor is enough to move the pen up and down in
any pixel location of the image/plane.  So the machine uses 1 stepper
motor for each :math:`X` and :math:`Y` axis, and 1 servomotor for the
:math:`Z` axis.  The printed image is binary because a single pen is
used to print the whole image, resulting in 2 possible colors:  the
surface color and the pen color.

The project is split in the following subsystems:

**PIMG**
  *Processing IMaGe*, routines that process the input image to adapt it
  to printerc requirements.  It outputs a modified image which the user
  manually inputs to printerc.

**printerc**
  This the computer program that actually drives printerm through
  mcircuit. With its interface the user chooses the image, and starts
  the printing process by continually sending commands to printerm.
  Connected to mcircuit through USB.

**mcircuit**
  The main circuit, contains the microcontroller and motor drivers.  Its
  subsystems are:

  **MM12**
  *Mini Maestro 12*, the digital controller.  Connected to MCB through
  regular electrical wire.

  **MCB**
  *Main Connection Board*, supplies electrical connectors to plug the
  motors and the MM12.

  Connected to printerm through the motors.

**printerm**
  This is the physical machine, capable of motion across 3 axes.  Its
  machine tool is a pen which can positioned at some point in a plane
  (:math:`X` and :math:`Y` axes) and print a pixel moving the pen in the
  Z axis.

:ref:`fig:system_diagram` is a diagram of the whole project, see section
:ref:`section:subsystems` for details.

.. _fig:system_diagram:

.. figure:: _static/printer73x_system_diagram.png

   System diagram

   Main system diagram of printer73x with subsystems and their
   respective connections.

Specification
=============

printer73x can print raster images.  printerm the actual machine, has a
limit on the characteristics of such image, but PIMG takes care of
adapting the original input image for the rest of the process.

.. _section:subsystems:

Subsystems
==========

:ref:`fig:system_diagram` shows how the subsystems interact.  PIMG
adapts the image to fulfill printerc's image requirements.  Then
printerc uses the image to drive printerm through mcircuit.

PIMG
----

*Processing IMaGe*, routines that process the input image to adapt it to
printerc requirements. It outputs a modified image which the user
manually inputs to printerc.  Implemented with `MATLAB
<http://www.mathworks.com/products/matlab/>`_.  It may not be necessary
to use PIMG if the original image already fulfill printerc's image
requirements.

.. _fig:pimg_screenshot:

.. figure:: ../../pimg/pimg_screenshot.png
   :scale: 70 %

   PIMG's screenshot.

.. _subsection:printerc:

printerc
--------

.. automodule:: printerc
   :members:
   :undoc-members:

mcircuit
--------

printerc controls mcircuit (*Main Circuit*), which in turn drives the
motors.  mcircuit's subsystems are :ref:`subsubsection:mm12` and
:ref:`subsubsection:mcb`.

.. figure:: ../../mcircuit/connectors.png
   :scale: 85 %

   mcircuit's connectors

   mcircuit's connectors diagram.

.. _fig:mcircuit_schematic:

.. figure:: ../../mcircuit/schematic.png
   :scale: 55 %

   mcircuit's schematic

   mcircuit's schematic diagram.

.. _subsubsection:mm12:

MM12
~~~~

.. _fig:mm12_top_view:

.. figure:: ../../mcircuit/mm12/top_view.jpg
   :scale: 80 %

   MM12's labeled top view.

   Image credit: [MM12UG]_, http://www.pololu.com/picture/view/0J2341

The `Pololu <http://www.pololu.com/>`_'s *Mini Maestro 12* is an USB
servo controller.  Quoted from [MM12UG]_:

  With three control methods — USB for direct connection to a PC
  computer, TTL serial for use with embedded systems, and internal
  scripting for self-contained, host controller-free applications — and
  channels that can be configured as servo outputs for use with radio
  control (RC) servos or electronic speed controls (ESCs), digital
  outputs, or analog/digital inputs, the Maestro is a highly versatile
  servo controller and general I/O board in a highly compact package.

MM12 doesn't do anything in its own, it only loads some subroutines in
its memory which printerc calls through a serial connection stablished
between MM12 and printerc. This is a master-slave architecture (printerc
is master, MM12 is slave).  These subroutines are basically the
translations in each axis.  Because of limitations in MM12, subroutines
cannot execute in parallel, making axial interpolation (driving more
than 1 motor at a time) impossible (see
:py:func:`printerc.print_image_better_better`).

MM12 directly drives the servomotor, but uses MCB's stepper motor
drivers to drive the stepper motors.  Again, all of this actually
commanded by printerc.

.. _admonition:mcircuit_mm12_mcb_equivalent_connectors:

.. important::
   This pins/connectors are equivalent::

     MM12.USB_port = mcircuit.PCUSB
     MM12.VSRV+ = MCB.VSRV+
     MM12.VSRV- = MCB.VSRV-

   See section :ref:`section:mcb`

The script with the routines loaded in MM12 is::

  0 4 acceleration
  100 4 speed

  sub x_neg_pulse
    6800 0 servo          # set direction
    5600 1 servo
    1 delay
    6800 1 servo
    1 delay
    quit

  sub x_pos_pulse
    5600 0 servo          # set direction
    5600 1 servo
    1 delay
    6800 1 servo
    1 delay
    quit

  sub x_neg_pixel
    10
    6800 0 servo          # set direction
    begin
      dup
      while
      5600 1 servo
      1 delay
      6800 1 servo
      1 delay
      1 minus
    repeat
    quit

  sub x_pos_pixel
    10
    5600 0 servo          # set direction
    begin
      dup
      while
      5600 1 servo
      1 delay
      6800 1 servo
      1 delay
      1 minus
    repeat
    quit

  sub y_neg_pulse
    5600 2 servo          # set direction
    5600 3 servo
    1 delay
    6800 3 servo
    1 delay
    quit

  sub y_pos_pulse
    6800 2 servo          # set direction
    5600 3 servo
    1 delay
    6800 3 servo
    1 delay
    quit

  sub y_neg_pixel
    10
    5600 2 servo          # set direction
    begin
      dup
      while
      5600 3 servo
      1 delay
      6800 3 servo
      1 delay
      1 minus
    repeat
    quit

  sub y_pos_pixel
    10
    6800 2 servo          # set direction
    begin
      dup
      while
      5600 3 servo
      1 delay
      6800 3 servo
      1 delay
      1 minus
    repeat
    quit

  sub z_position_off
    3760 4 servo
    begin
      get_moving_state
    while
      # wait until is is no longer moving.
    repeat
    quit

  sub z_position_on
    8700 4 servo
    begin
      get_moving_state
    while
      # wait until is is no longer moving.
    repeat
    quit


.. _section:mcb:

.. _subsubsection:mcb:

MCB
~~~

*Main Connection Board*, supplies electrical connectors to plug the
MM12, the stepper motors, the STOP button and the power supplies.  MCB
contains 2 EasyDrivers v4.0 [EASYDRIVERD]_, the stepper motors drivers.
Note that the role MCB is to merely contain the stepper motors drivers,
and to provide electrical connections to the rest of the system.
Optionally, a general hardware STOP button can be used.

.. figure:: ../../mcircuit/mcb/top_view.png
   :scale: 70 %

   MCB's top view.

.. _fig:mcb_top_view_labeled:

.. figure:: ../../mcircuit/mcb/top_view_labeled.png
   :scale: 70 %

   MCB's labeled top view.

printerm
--------

This is the physical machine, capable of motion across 3 axes.  Its
machine tool is a pen which can positioned at some point in a plane
(:math:`X` and :math:`Y` axes) and print a pixel moving the pen in the
:math:`Z` axis.

.. figure:: ../../printerm/0.png
   :scale: 60 %

   printerm

.. _section:physical_components:

Physical Components
===================
Symbolic names in parentheses, used throughout the document.

- 1 12 V DC power supply, 1.25 A (PS12A).

- 1 12 V DC power supply, 1 A (PS12B).

- 1 5 V DC power supply, 1 A (PS5).

- 1 Mini Maestro 12 (MM12).

- 1 main control board (MCB).

- 6 single jumper wires, 6''.

- 1 servomotor cable extension.

- 2 stepper motors.

- 1 servomotor.

- 1 main printer structure (printerm).

- 4 paperclips.

.. _section:installation:

Installation
============

.. _fig:printer73x_connections_diagram:

.. figure:: _static/printer73x_connections_diagram.png
   :scale: 70 %

   printer73x's connections diagram

#. Install printerc dependencies:

   #. Install *Python* >=2.7.1 CPython implementation.

      .. admonition:: Windows note

         Download the Windows installer from
         `here <http://www.python.org/download/>`_.

   #. Install *pySerial* >=2.5 (See [PYSERIALD]_, section *pySerial*,
      subsection *Installation*).

   #. Install *IPython* 0.10.2 (See [IPYTHOND]_, section *Installation*).

   #. Install *matplotlib* >=1.0.1 (See [MPLD]_, section *User's Guide*,
      subsection *Installing*).

   #. Install *ImageMagick* >= 6.6.5.10 (See [IMGMAGD]_).

#. Unzip the printer73x package to a directory of your choice.

#. If mcircuit's subsystems (MM12 and MCB) are disconnected, refer to
   :ref:`fig:mcircuit_schematic`, :ref:`fig:mm12_top_view` and
   :ref:`fig:mcb_top_view_labeled` to connect them.

#. Plug the motors to mcircuit (refer to
   :ref:`fig:printer73x_connections_diagram`,
   :ref:`fig:mcb_top_view_labeled` and
   :ref:`this important note
   <admonition:mcircuit_mm12_mcb_equivalent_connectors>`).

#. Refer to :ref:`fig:printer73x_connections_diagram` to plug the PS5,
   PS12A and PS12B power supplies to mcircuit.

#. Install the machine tool (pen) in the :math:`Z` axis slot.

Your printer73x is now installed and ready to be operated.

Operation
=========

Follow these steps to operate the printer73x.

#. Power up PS12A, PS12B and PS5.

#. Connect your PC and mcircuit with the USB cable
   (see :ref:`fig:printer73x_connections_diagram`).

#. Open a command line terminal.

#. Remove the alpha channel and adjust the image resolution with::

     mogrify -alpha off -resize '73x100' <img_orig.png>

   See ImageMagick documentation to understand better this command.  The
   new pixel resolution must be less or equal than the maximum printing
   resolution of the printer, which is determined by the printing
   surface.

#. Starting from the printer73x distribution directory, change the
   current directory to ``printerc``.

#. Run the ``printerc.py`` program::

     python printerc.py

   .. note:: If the python interpreter is not in your ``PATH``
      environment variable, call it with an absolute path.

#. Identify the MM12 *command port*.  When you connected mcircuit to an
   USB port, its shows up to your PC as 2 virtual serial ports.  You
   should find out the device name or port number of the MM12 command
   port (see [MM12UG]_, section 5.a).  To scan the serial ports on your
   PC do:

   .. sourcecode:: ipython

       In [1]: scan_serial_ports()

#. Connect printerc and printerm executing the ``connect_printerm``
   command with the *command port* device name or port number as
   argument.  For example if your command port device name is ``COM1``,
   then run:

   .. sourcecode:: ipython

      In [2]: connect_printerm('COM1')

   and you will get:

   .. sourcecode:: ipython

      ``printerc`` is now connected to ``printerm`` through ``COM1``

#. Put a piece of paper on the printing surface (use the paperclips).

#. Enter *manual translation mode* to manually translate the printerm
   tool to the HOME position.  To translate precisely but slowly run:

   .. sourcecode:: ipython

      In [3]: manual_translation_mode(precise=True)

   To perform a faster but less precise translation, run:

   .. sourcecode:: ipython

      In [3]: manual_translation_mode(precise=False)

   Because precise translation is the default, you can just run
   ``manual_translation_mode()`` without arguments.  In manual
   translation mode you can translate the printerm tool across the
   :math:`X` and :math:`Y` axes by sending pulses to the respective
   motor drivers with your keyboard.  The following table relates the
   key pressed to the translation pulse sent to the drivers:

   ===========  =========  =========
   key pressed  axis       direction
   ===========  =========  =========
        h       :math:`X`     \-
        l       :math:`X`     \+
        j       :math:`Y`     \+
        k       :math:`Y`     \-
   ===========  =========  =========

   You can only manually translate across one single axis at a time.  To
   exit manual translation mode just press another key.

#. Load and process the image:

   .. sourcecode:: ipython

      In [4]: prepare_img(<imgpath>)
      Loading ``<imgpath>``...
      Processing the image...

   Where ``<imgpath>`` is the path to the image to print.  The following
   variables will be set:

   - ``img``, the array representation of the image.

   - ``b``, the image's height, number of rows in the array representation.

   - ``w``, the image's width, number of columns in the array representation.

#. Start the printing process with:

   .. sourcecode:: ipython

      In [5]: print_image()
      ...

   and wait for the process to finish:

   .. sourcecode:: ipython

      *printer73x* finished printing the image ``<imgpath>``

   where ``<imgpath>`` is the path of the image printed that you
   selected in step 3.  The machine tool is in the HOME position.

#. Exit printerc:

   .. sourcecode:: ipython

      In [6]: exit()
      Do you really want to exit ([y]/n)?

      Thanks for using ``printerc``!

#. Power down printerm:

   #. Unplug the USB cable.

   #. Unplug PS5.

   #. Unplug PS12B.

   #. Unplug PS12A.

TODO
====

- Improve documentation.

- Improve the controller to implement axial interpolation and to drive
  the motors faster.

- Merge PIMG and printerc in a single Python module, then printer73x
  won't require MATLAB anymore.

- Improve printerc to implement the functionality from ImageMagick to
  drop that software requirement.

- Get and merge printerm documentation file with this document.

- Create a configuration file so the user can do custom configuration
  without modifying the source code.

- Translate to english documentation sections in spanish.

References
==========

.. [MM12UG] Pololu Maestro Servo Controller User's Guide (http://www.pololu.com/docs/0J40).

.. [PYSERIALD] pySerial 2.6 project documentation
     (http://pyserial.sourceforge.net/index.html).

.. [IPYTHOND] IPython 0.10.2 project documentation
     (http://ipython.org/ipython-doc/rel-0.10.2/html/index.html).

.. [MPLD] matplotlib 1.1 project documentation
     (http://matplotlib.sourceforge.net/contents.html).

.. [EASYDRIVERD] *EasyDriver Stepper Motor Driver.  An Open Source Hardware
     Stepper Motor Drive Project* (http://www.schmalzhaus.com/EasyDriver/).

.. [A3967D] *Microstepping Driver with Translator*.  Allegro MicroSystems, Inc.
     Datasheet
     (http://www.allegromicro.com/en/Products/Part_Numbers/3967/3967.pdf).

.. [IMGMAGD] *Download Binary Releases*.
   http://www.imagemagick.org/script/binary-releases.php 

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
