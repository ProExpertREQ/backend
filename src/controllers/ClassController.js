import Subject from '../models/Subject';
import MyClass from '../models/MyClass';
import Class from '../models/Class';

class ClassController {
  async create(req, res) {
    try {
      const { subject_id } = req.params;
      const {
        code,
        professor,
        email_professor,
        room_professor,
        year_term,
        schedule,
        local,
        moodle,
        teams,
        youtube,
        whatsapp,
        telegram,
      } = req.body;

      const subject = await Subject.findByPk(subject_id);

      if (!subject) {
        return res.status(400).json({
          errors: 'Disciplina não foi encontrada',
        });
      }

      await Class.create({
        subject_id,
        code,
        professor,
        email_professor,
        room_professor,
        year_term,
        schedule,
        local,
        moodle,
        teams,
        youtube,
        whatsapp,
        telegram,
      });

      return res.status(201).json({ message: 'success' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    const classes = await Class.findAll({
      attributes: [
        'id',
        'code',
        'professor',
        'email_professor',
        'room_professor',
        'year_term',
        'schedule',
        'local',
        'teams',
        'moodle',
        'youtube',
        'whatsapp',
        'telegram',
      ],
    });

    return res.status(200).json(classes);
  }

  async getClassesBySubject(req, res) {
    const { subject_id } = req.params;

    const subject = await Subject.findByPk(subject_id);

    if (!subject) {
      return res.status(400).json({
        errors: 'A disciplina não existe.',
      });
    }

    const classes = await Class.findAll({
      where: {
        subject_id,
      },
      attributes: [
        'id',
        'code',
        'professor',
        'email_professor',
        'room_professor',
        'year_term',
        'schedule',
        'local',
        'teams',
        'moodle',
        'youtube',
        'whatsapp',
        'telegram',
      ],
    });

    return res.json({ Subject: subject.name, classes });
  }

  async getClassById(req, res) {
    const { id } = req.params;

    const theClass = await Class.findByPk(id);

    if (!theClass) {
      return res.status(400).json({
        error: 'Essa turma não existe',
      });
    }

    const {
      code,
      professor,
      email_professor,
      room_professor,
      year_term,
      schedule,
      local,
      moodle,
      teams,
      youtube,
      whatsapp,
      telegram,
    } = theClass;

    return res.json({
      code,
      professor,
      email_professor,
      room_professor,
      year_term,
      schedule,
      local,
      moodle,
      teams,
      youtube,
      whatsapp,
      telegram,
    });
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const theClass = await Class.findByPk(id);

      if (!theClass) {
        return res.status(400).json({
          errors: 'A turma não foi encontrada',
        });
      }

      const {
        code,
        professor,
        email_professor,
        room_professor,
        year_term,
        schedule,
        local,
        moodle,
        teams,
        youtube,
        whatsapp,
        telegram,
      } = await theClass.update(req.body);

      return res.json({
        code,
        professor,
        email_professor,
        room_professor,
        year_term,
        schedule,
        local,
        moodle,
        teams,
        youtube,
        whatsapp,
        telegram,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const theClass = await Class.findByPk(id);

    if (!theClass) {
      return res.status(400).json({
        errors: 'A turma não foi encontrada',
      });
    }

    await theClass.destroy();

    return res.status(200).json({ message: 'deleted' });
  }

  async register(req, res) {
    const user_id = req.userId;
    const class_id = req.params.id;

    const theClass = await Class.findByPk(class_id);

    if (!theClass) {
      return res.status(400).json({
        errors: 'A turma não existe',
      });
    }

    const registered = await MyClass.findOne({
      where: {
        user_id,
        class_id,
      },
    });

    if (registered) {
      return res.status(400).json({
        errors: 'A turma já foi registrada',
      });
    }

    await MyClass.create({ user_id, class_id });

    return res.status(201).json({ message: 'success' });
  }
}

export default new ClassController();
